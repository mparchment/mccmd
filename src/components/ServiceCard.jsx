import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ServiceCardStyled = styled.div`
    width: 72.5%;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
    margin-bottom: 50px;
    padding: 25px 30px;
    border: 1px solid #ddd;
    box-shadow: 0 1px 9px #ddd;
    font-size: 14px;
    font-weight: 500;
    border-radius: 5px;
    cursor: pointer;
`;

const ServiceCardSubtitle = styled.h3`
    text-transform: uppercase;
`;

const ServiceCard = ({ subtitle, to, children }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to);
    };

    return (
        <ServiceCardStyled onClick={handleClick}>
            <ServiceCardSubtitle>{subtitle}</ServiceCardSubtitle>
            {children}
        </ServiceCardStyled>
    )
};

ServiceCard.propTypes = {
    subtitle: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired
};

export default ServiceCard;
