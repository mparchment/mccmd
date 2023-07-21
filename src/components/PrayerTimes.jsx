import styled from 'styled-components';

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
  text-align: center;
`;

const GridItemSmall = styled(GridItem)`
  font-size: 9.5px;
  line-height: normal;
`;

const PrayerTimes = () => {
  const times = [
    { prayer: 'Fajr', time: '5:20' },
    { prayer: 'Zuhr', time: '1:15' },
    { prayer: 'Asr', time: '5:15' },
    { prayer: 'Maghrib', time: '8:10' },
    { prayer: 'Isha', time: '10:20' },
  ];

  return (
    <PrayerTimeGrid>
      <GridItem /> {/* Empty first cell */}
      {times.map((time, index) => <GridItemSmall key={index+'prayer'}>{time.prayer}</GridItemSmall>)}

      <GridItemSmall>{"Jama'at"}</GridItemSmall>
      {times.map((time, index) => <GridItem key={index+'time'}>{time.time}</GridItem>)}
    </PrayerTimeGrid>
  );
};

export default PrayerTimes;
