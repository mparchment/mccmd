import { useState, useEffect } from 'react';
import styled from 'styled-components';
import MCCLogo from '../assets/logo-small-white.png';
import useIsMobile from '../hooks/useIsMobile';

const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

// Sample events
const events = [
  { day: 'MON', name: 'Fajr Halaqah', time: '05:30' },
  { day: 'MON', name: 'Breakfast Club', time: '08:00' },
  { day: 'MON', name: 'Sirah Study', time: '19:30'},
  { day: 'TUE', name: 'Tazkiyah Tuesdays', time: '07:30' },
  { day: 'WED', name: 'Hadith Study', time: '19:30'},
  { day: 'THU', name: 'YAP Book Club', time: '07:30' },
  { day: 'FRI', name: "1st Jumu'ah", time: '13:00' },
  { day: 'FRI', name: "2nd Jumu'ah", time: '14:00' },
  { day: 'FRI', name: 'MYO Halaqah', time: '18:00'},
  { day: 'SAT', name: 'Breakfast Club', time: '09:00' },
  { day: 'SAT', name: 'MCC Cleanup', time: '11:00' },
];

// Add programs to all days except Saturday and Friday
daysOfWeek.forEach((day) => {
  if (day !== 'SAT' && day !== 'FRI') {
    events.push(
      { day, name: "Qur'an Program", time: '10:00' },
      { day, name: 'Islamic Studies', time: '14:00' },
    );
  }
});

const palette = [
  '#F6DDCC',
  '#EDBB99',
];

const AlignContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 100%;

  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
`;

const CalendarTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: #333;
  color: #fff;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    padding-bottom: 0px;
  }
`;

const WeekDaysWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  gap: 5px;

  @media (max-width: 768px) {
    margin-top: 15px;
    flex-direction: column;
    align-items: center;
    width: 90%;
    gap: 20px;
  }
`;


const Event = styled.div`
  margin: 4px;
  padding: 8px;
  border-radius: 5px;
  background-color: ${props => props.backgroundColor || '#f0f0f0'};
  color: #333;
  font-weight: 600;
  font-size: 14px;
  white-space: nowrap;

  @media (max-width: 768px) {
    white-space: normal;
  }
`;


const DayColumn = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
  }
`;

const DayTitleWithDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 33.33%;
    text-align: center;
    justify-content: center;
  }
`;

const EventsWrapper = styled.div`
  border-radius: 5px;
  flex-grow: 1;

  @media (min-width: 768px) {
    background: #fff;
  }
`;

const TopBanner = styled.div`
  background: #121212;
  padding: 20px;
  margin: 0 -20px 0 -20px;
  z-index: 1;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin: 0;
  }
`;


const Logo = styled.img`
  height: 50px;
`;

const CalendarMonth = styled.div`
  font-size: 15px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const getOrdinal = (n) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
};

const Calendar = () => {
  const isMobile = useIsMobile();

  const convertToAMPM = (time) => {
    let hours = parseInt(time.split(':')[0], 10);
    let minutes = time.split(':')[1];
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `${hours}:${minutes} ${ampm}`;
  };

  const today = new Date();
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const currentDayIndex = today.getDay();

  const rotatedDaysOfWeek = daysOfWeek.slice(currentDayIndex).concat(daysOfWeek.slice(0, currentDayIndex));

  return (
    <AlignContainer>
      <CalendarWrapper>
        <TopBanner>
          {!isMobile && <Logo src={MCCLogo} alt="MCCMD Logo" />}
          <CalendarTitle>Weekly Calendar</CalendarTitle>
          <CalendarMonth>September 2023 {!isMobile && <br />} {isMobile && '·'} Rabiʿ Al-Awwal 1445</CalendarMonth>
        </TopBanner>
        <WeekDaysWrapper>
          {rotatedDaysOfWeek.map((day, index) => {
            const dayDate = new Date(today);
            dayDate.setDate(dayDate.getDate() + index);
            const dayNumber = dayDate.getDate();
            const ordinal = getOrdinal(dayNumber);

            return (
              <DayColumn key={day}>
                <DayTitleWithDate>
                  <h3>
                    {day} {!isMobile && '-'} {isMobile && <br/>} {dayNumber}{ordinal}
                  </h3>
                </DayTitleWithDate>
                <EventsWrapper>
                  {events
                    .filter((event) => event.day === day)
                    .sort((a, b) => a.time.localeCompare(b.time))
                    .map((event, index) => (
                        <Event
                        key={index}
                        style={{
                            backgroundColor: isMobile ? '#fff' : palette[index % 2],
                            color: isMobile ? '#000' : '#333'
                        }}
                        >
                        {event.name} ({convertToAMPM(event.time)})
                        </Event>
                    ))}
                </EventsWrapper>
              </DayColumn>
            );
          })}
        </WeekDaysWrapper>
      </CalendarWrapper>
    </AlignContainer>
  );
};

export default Calendar;