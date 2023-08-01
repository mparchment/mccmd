import styled from 'styled-components';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import PropTypes from 'prop-types';

const EventCardWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin-bottom: 30px;
`;

const EventCardSubtitle = styled.h3`
    text-transform: uppercase;
    margin-bottom: 25px;
    font-weight: 600;
    color: #333;
    margin-bottom: 8px;
`;

const EventCardText = styled.span`
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 15px;
    margin-top: 5px;
`;

const EventDetails = styled.div`
    font-size: 14px;
    font-weight: 500;
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
    line-height: 1.7;
`;

const AlignWrapper = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const EventCard = ({ imgSrc, title, text, time, location, date }) => (
    <AlignWrapper>
        <EventCardWrapper>
            <img src={imgSrc} alt="" style={{width: '100%'}}/>
            <EventCardSubtitle>{title}</EventCardSubtitle>
            <EventCardText>{text}</EventCardText>
            <EventDetails><AccessTimeIcon style={{ fontSize: "150%", color: "#b98474"}}/>{time}</EventDetails>
            <EventDetails><PlaceIcon style={{ fontSize: "150%", color: "#b98474"}}/>{location}</EventDetails>
            <EventDetails><CalendarMonthIcon style={{ fontSize: "150%", color: "#b98474"}}/>{date}</EventDetails>
        </EventCardWrapper>
    </AlignWrapper>
);

EventCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
};

export default EventCard;
