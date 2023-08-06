import { useEffect, useState, useContext, useMemo } from 'react';
import useIsMobile from '../hooks/useIsMobile';
import styled from 'styled-components';
import TimesContext from '../contexts/TimesContext';

const PrayerTimesWrapper = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;

  @media (min-width:1366px) {
    margin-top: 0px;
  }
`;

const PrayerTimeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  font-size: 12px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  align-items: center;
  max-width: 414px;
  margin: auto;
`;

const GridItem = styled.div`
  padding: 10px;
  padding-bottom: 3px;
  text-align: center;
`;

const GridItemSmall = styled(GridItem)`
  font-size: 9.5px;
  line-height: normal;
`;

const GridItemNext = styled(GridItem)`
  color: #b98474;
`;

const JummuahWrapper = styled.div`
  text-align: center;
  margin-top: 2px;
  margin-bottom: 2px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 500;
`;

const PrayerTimes = () => {
  const { times: apiTimes } = useContext(TimesContext);  const [nextPrayerIndex, setNextPrayerIndex] = useState(0);
  const isMobile = useIsMobile();

  const times = useMemo(() => {
    if (!apiTimes) return [];

    const initialTimes = [
      { prayer: 'Fajr', time: '5:15', beginTime: apiTimes.Fajr },
      { prayer: 'Dhuhr', time: '1:30', beginTime: apiTimes.Dhuhr },
      { prayer: 'Asr', time: '6:30', beginTime: apiTimes.Asr },
      { prayer: 'Maghrib', beginTime: apiTimes.Maghrib },
      { prayer: 'Isha', time: '10:00', beginTime: apiTimes.Isha },
    ];


    const maghribTime = initialTimes.find(t => t.prayer === 'Maghrib').beginTime.split(':');
    maghribTime[1] = parseInt(maghribTime[1], 10) + 10;
    if (maghribTime[1] >= 60) {
      maghribTime[0] = parseInt(maghribTime[0], 10) + 1;
      maghribTime[1] -= 60;
    }
    initialTimes.find(t => t.prayer === 'Maghrib').time = maghribTime.join(':');

    return initialTimes;
  }, [apiTimes]);

  const currentTime = useMemo(() => new Date(), []); 

  const convertTimeStrToDate = (timeStr, index) => {
    const [hours, minutes] = timeStr.split(':');
    let d = new Date();
    let hourValue = +hours;
    if (index > 0) {
      hourValue += 12; 
    }
    d.setHours(hourValue);
    d.setMinutes(+minutes);
    return d;
  };

  useEffect(() => {
    for (let i = 0; i < times.length; i++) {
      let prayerTime = convertTimeStrToDate(times[i].time, i);
      if (prayerTime > currentTime) {
        setNextPrayerIndex(i);
        break;
      }
    }
  }, [times, currentTime]);


  return (
    <PrayerTimesWrapper>
      {isMobile && <JummuahWrapper>
        {"1st Jumu'ah"}: 1:00 PM / {"2nd Jumu'ah"}: 2:00 PM
      </JummuahWrapper>}
      <PrayerTimeGrid>
        <GridItem /> {/* Empty first cell */}
        {times.map((time, index) => <GridItemSmall key={index+'prayer'}>{time.prayer}</GridItemSmall>)}

        <GridItemSmall>{"Begins"}</GridItemSmall>
        {times.map((time, index) => <GridItem key={index+'beginTime'}>{time.beginTime}</GridItem>)}

        <GridItemSmall>{"Iqamah"}</GridItemSmall>
        {times.map((time, index) => index === nextPrayerIndex ? 
            <GridItemNext key={index+'time'}>{time.time}</GridItemNext> : 
            <GridItem key={index+'time'}>{time.time}</GridItem>)}
      </PrayerTimeGrid>
    </PrayerTimesWrapper>
  );
};

export default PrayerTimes;