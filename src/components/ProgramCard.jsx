import styled from 'styled-components';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import PropTypes from 'prop-types';

const ProgramCardWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    min-width: 355px;
    margin: 0 auto;
    margin-bottom: 30px;
`;

const ProgramCardSubtitle = styled.h3`
    text-transform: uppercase;
    font-weight: 600;
    color: inherit;
    margin-bottom: 8px;
`;

const ProgramCardText = styled.span`
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 15px;
    margin-top: 5px;
`;

const ProgramDetails = styled.div`
    font-size: 14px;
    font-weight: 500;
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
    line-height: 1.7;
`;

const AlignWrapper = styled.div`
    max-width: 355px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const Image = styled.img`
    width: 100%;
    border-radius: 5px;

    @media (max-width: 400px) {
        width: 85%;
    }
`;

const ProgramCard = ({ imgSrc, title, text, time, location, date }) => (
    <AlignWrapper>
        <ProgramCardWrapper>
            <Image src={imgSrc} alt=""/>
            <ProgramCardSubtitle>{title}</ProgramCardSubtitle>
            <ProgramCardText>{text}</ProgramCardText>
            <ProgramDetails><AccessTimeIcon style={{ fontSize: "150%", color: "#b98474"}}/>{time}</ProgramDetails>
            <ProgramDetails><PlaceIcon style={{ fontSize: "150%", color: "#b98474"}}/>{location}</ProgramDetails>
            <ProgramDetails><CalendarMonthIcon style={{ fontSize: "150%", color: "#b98474"}}/>{date}</ProgramDetails>
        </ProgramCardWrapper>
    </AlignWrapper>
);

ProgramCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
};

export default ProgramCard;
