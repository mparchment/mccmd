import styled from 'styled-components';
import { addDays } from 'date-fns';
import PropTypes from 'prop-types';

const AlignCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  margin-bottom: 50px;
  gap: 5px;

  @media (max-width: 1366px) {
    flex-direction: column;
  }
`;

const DayColumn = styled.div`
  flex: 1;
  text-align: center;
  min-width: calc(100% / 7);
`;

const DayTitle = styled.h3`
  text-transform: uppercase;
  margin-bottom: 5px;
`;

const Event = styled.div`
  margin: 5px 0;
  padding: 5px;
  border-radius: 5px;
  background: ${({ bgColor }) => `#${bgColor}`};
  font-weight: 600;
  box-shadow: 0px 3px 0 rgba(0, 0, 0, 0.1);
  padding: 10px;
  font-size: 14px;
`;


const EventsWrapper = styled.div`
    border-radius: 5px;
    padding: 10px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

const WeeklyCalendar = ({ events }) => {
  const today = new Date();
  const daysOfWeek = Array.from({ length: 7 }, (_, i) => addDays(today, i));
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const colorPalette = [
    '#fff0e0',
    '#fce0cc',
  ];

  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
  
    return `${(hours + 11) % 12 + 1}:${minutes} ${ampm}`;
  };  

  return (
    <AlignCenter>
      <Wrapper>
        {daysOfWeek.map((day, dayIndex) => {
          const dayEvents = events.filter((event) =>
            day.toISOString().split('T')[0] === new Date(event.date).toISOString().split('T')[0]
          );

          dayEvents.sort((a, b) => new Date(a.startTime) - new Date(b.startTime));

          return (
            <DayColumn key={dayIndex}>
              <DayTitle>{dayNames[day.getDay()]}</DayTitle>
              <EventsWrapper>
                {dayEvents.map((event, eventIndex) => (
                  <Event key={eventIndex} style={{backgroundColor: colorPalette[(eventIndex + dayIndex) % colorPalette.length]}}>
                    <strong>{event.name}</strong><br/>{formatTime(new Date(event.startTime))}
                  </Event>
                ))}
              </EventsWrapper>
            </DayColumn>
          );
        })}
      </Wrapper>
    </AlignCenter>
  );
};

WeeklyCalendar.propTypes = {
  events: PropTypes.array.isRequired,
};

export default WeeklyCalendar;