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
  const { times: apiTimes } = useContext(TimesContext);
  const [nextPrayerIndex, setNextPrayerIndex] = useState(0);
  const [times, setTimes] = useState([]);
  const isMobile = useIsMobile();

  const parseGoogleDate = (googleDate) => {
    const timeParts = googleDate.match(/\(([^)]+)\)/)[1].split(',');
    const parsedTime = new Date(...timeParts).toLocaleTimeString().slice(0, 5);
    return parsedTime.endsWith(':') ? parsedTime.slice(0, -1) : parsedTime;
  };

  const fetchPrayerTimes = async () => {
    const response = await fetch('https://docs.google.com/spreadsheets/d/1CQ7UpSaMG9HjqxNLRqARgJmHSRBpprlGKz9UtPgGDuM/gviz/tq?');
    const text = await response.text();
    const json = JSON.parse(text.match(/google\.visualization\.Query\.setResponse\(([\s\S\w]+)\);/)[1]);
    const rows = json.table.rows;

    const fetchedTimes = rows.map(row => {
      const cells = row.c;
      return {
        month: cells[0].v,
        Fajr: parseGoogleDate(cells[1].v),
        Dhuhr: parseGoogleDate(cells[2].v),
        Asr: parseGoogleDate(cells[3].v),
        Maghrib: "",
        Isha: parseGoogleDate(cells[5].v),
      };
    });

    const currentMonth = new Date().toLocaleString('default', { month: 'long' });
    const currentMonthTimes = fetchedTimes.find(time => time.month === currentMonth);

    if (currentMonthTimes && apiTimes) {
      const maghribTime = apiTimes.Maghrib.split(':');
      maghribTime[1] = parseInt(maghribTime[1], 10) + 5;
      if (maghribTime[1] >= 60) {
        maghribTime[0] = parseInt(maghribTime[0], 10) + 1;
        maghribTime[1] -= 60;
      }
      maghribTime[1] = maghribTime[1].toString().padStart(2, '0');
      const maghribFinalTime = maghribTime.join(':');
  
      setTimes([
        { prayer: 'Fajr', time: currentMonthTimes.Fajr, beginTime: apiTimes.Fajr },
        { prayer: 'Dhuhr', time: currentMonthTimes.Dhuhr, beginTime: apiTimes.Dhuhr },
        { prayer: 'Asr', time: currentMonthTimes.Asr, beginTime: apiTimes.Asr },
        { prayer: 'Maghrib', time: maghribFinalTime, beginTime: apiTimes.Maghrib },
        { prayer: 'Isha', time: currentMonthTimes.Isha, beginTime: apiTimes.Isha },
      ]);
    }
  };
  
  useEffect(() => {
    fetchPrayerTimes();
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