import PropTypes from 'prop-types';
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
`;

const ServiceCardSubtitle = styled.h3`
    text-transform: uppercase;
`;

const ServiceCard = ({ subtitle, children }) => {
    return (
        <ServiceCardStyled>
            <ServiceCardSubtitle>{subtitle}</ServiceCardSubtitle>
            {children}
        </ServiceCardStyled>
    )
};

ServiceCard.propTypes = {
    subtitle: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default ServiceCard;
