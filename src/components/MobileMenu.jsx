import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MenuContext from '../contexts/MenuContext';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Menu = styled.div`
    top: 67px;
    left: 0;
    width: 100%;
    height: fit-content;
    background-color: #fff;
    z-index: 1;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
    padding-bottom: 55px;
    gap: 30px;
    font-weight: bold;
`;

const MenuLink = styled(Link)`
    margin-left: 40px;
    border-bottom: 2px solid #333;
    width: fit-content;
    text-transform: uppercase;
    font-size: 20px;

    color: inherit;
    text-decoration: none;

    &:first-child {
        margin-top: 15px;
    }
`;

const ServiceLink = styled(Link)`
    margin-left: 60px;
    text-decoration: none;
    border-bottom: 2px solid #333;
    width: fit-content;
    text-transform: uppercase;
    color: inherit;
`;

const Icons = styled.div`
    display: flex;
    justify-content: center;
    align-self: center;
    gap: 10px;
    margin-top: 30px;
    margin-left: 0 !important;
`;


const IconLink = styled.a`
    color: inherit;
    text-decoration: none;
`;

const MCCLiveLink = styled.a`
    margin-left: 40px;
    border-bottom: 2px solid #333;
    width: fit-content;
    text-transform: uppercase;
    font-size: 20px;
    color: inherit;
    text-decoration: none;
`;

function MobileMenu() {
    const {toggleMenu} = useContext(MenuContext);
    const [servicesOpen, setServicesOpen] = useState(false);

    const handleServicesClick = () => {
        setServicesOpen(!servicesOpen);
    }

    const handleMenuClick = () => {
        toggleMenu();
        // setServicesOpen(false);
    }

    return (
        <Menu>
            <MenuLink to="/mccmd/about-us" onClick={handleMenuClick}>About Us</MenuLink>
            <MenuLink to="#" onClick={handleServicesClick}>Services</MenuLink>
            {servicesOpen && <>
                <ServiceLink to="/mccmd/imam" onClick={handleMenuClick}>Shahadas</ServiceLink>
                <ServiceLink to="/mccmd/imam" onClick={handleMenuClick}>Meet the Imam</ServiceLink>
                <ServiceLink to="/mccmd/clinic" onClick={handleMenuClick}>Clinic</ServiceLink>
                <ServiceLink to="/mccmd/zakat" onClick={handleMenuClick}>Nikahs</ServiceLink>
                <ServiceLink to="/mccmd/janazahs" onClick={handleMenuClick}>Janazahs</ServiceLink>
                <ServiceLink to="/mccmd/zakat" onClick={handleMenuClick}>Zakat</ServiceLink>
                <ServiceLink to="/mccmd/food-pantry" onClick={handleMenuClick}>Food Pantry</ServiceLink>
                <ServiceLink to="/mccmd/refugee-aid" onClick={handleMenuClick}>Refugee Aid</ServiceLink>
                <ServiceLink to="/mccmd/general-events" onClick={handleMenuClick}>General Events</ServiceLink>
            </>}
            <MenuLink to="/mccmd/education" onClick={handleMenuClick}>Education</MenuLink>
            <MenuLink to="/mccmd/community" onClick={handleMenuClick}>Community</MenuLink>
            <MenuLink to="/mccmd/get-involved" onClick={handleMenuClick}>Get Involved</MenuLink>
            <MenuLink to="/mccmd/contact-us" onClick={handleMenuClick}>Contact Us</MenuLink>
            <MCCLiveLink href="https://www.youtube.com/@MCCMD" onClick={handleMenuClick}>MCC Live</MCCLiveLink>
            <Icons>
                <IconLink href='https://www.facebook.com/mccmaryland/'><FacebookIcon style={{ fontSize: '175%' }}/></IconLink>
                <IconLink href='https://www.instagram.com/mccmaryland/'><InstagramIcon style={{ fontSize: '175%' }}/></IconLink>
                <IconLink href='https://www.youtube.com/@MCCMD'><YouTubeIcon style={{ fontSize: '175%' }}/></IconLink>
            </Icons>
        </Menu>
    )
}

export default MobileMenu;