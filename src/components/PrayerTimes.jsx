import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useContext, useRef } from 'react';
import { HeaderContext } from '../contexts/HeaderContext';

const PrayerTimesWrapper = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
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
  padding-bottom: 3px;;
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
  const [nextPrayerIndex, setNextPrayerIndex] = useState(0);
  const { setHeaderHeight } = useContext(HeaderContext);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      setHeaderHeight((prev) => prev + ref.current.offsetHeight);
    }
  }, [setHeaderHeight]);

  const times = [
    { prayer: 'Fajr', time: '5:00', beginTime: '4:30' },
    { prayer: 'Zuhr', time: '1:30', beginTime: '1:00' },
    { prayer: 'Asr', time: '6:30', beginTime: '6:00' },
    { prayer: 'Maghrib', time: '8:30', beginTime: '8:00' },
    { prayer: 'Isha', time: '10:15', beginTime: '9:45' },
  ];

  useEffect(() => {
    const currentTime = new Date();

    const convertTimeStrToDate = (timeStr) => {
      const [hours, minutes] = timeStr.split(':');
      let d = new Date();
      d.setHours(+hours);
      d.setMinutes(+minutes);
      return d;
    };

    for (let i = 0; i < times.length; i++) {
      let prayerTime = convertTimeStrToDate(times[i].time);
      if (prayerTime > currentTime) {
        setNextPrayerIndex(i);
        break;
      }
    }
  }, []);

  return (
    <PrayerTimesWrapper>
      <JummuahWrapper>
        {"1st Jumu'ah"}: 1:00 PM / {"2nd Jumu'ah"}: 2:00 PM
      </JummuahWrapper>
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
