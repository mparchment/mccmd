import styled from 'styled-components';
// import MCCLogoLarge from '../assets/logo.png';
import MCCLogo from '../assets/logo-small.png';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useContext } from 'react';

import MenuContext from '../contexts/MenuContext';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';

import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const HeaderWrapper = styled.div`
    height: 67px;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
`;

const DonateButton = styled.button`
    background-color: #b98474;
    border: none;
    border-radius: 7.5px;
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 12px;
    padding: 15px 15px;
    margin-right: 10px;
    text-transform: uppercase;
`;

const Logo = styled.img`
    height: 50px;
`;

const MenuButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-grow: 1;
`;

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

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

const ServiceLink = styled(Link)`
    margin-left: 60px;
    text-decoration: none;
    border-bottom: 2px solid #333;
    width: fit-content;
    text-transform: uppercase;
    color: inherit;
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

function Header() {

    const {menuOpen, toggleMenu, closeMenu } = useContext(MenuContext);
    const [servicesOpen, setServicesOpen] = useState(false);

    const handleMenuClick = () => {
        toggleMenu();
        setServicesOpen(false);
    }

    const handleLogoClick = () => {
        closeMenu();
        setServicesOpen(false);
    }

    const handleServicesClick = () => {
        setServicesOpen(!servicesOpen);
    }

    return (
        <>
            <Helmet>
                <meta property="og:title" content="Muslim Community Center"/>
                <meta property="og:description" content="Welcome to MCC - the place to be!"/>
                <meta property="og:image" content={MCCLogo}/>
            </Helmet>
            <HeaderWrapper>
                <LogoWrapper><Link to="/mccmd/"><Logo src={MCCLogo} alt="logo" onClick={handleLogoClick}/></Link></LogoWrapper>
                <MenuButtonWrapper>
                    <DonateButton>Donate</DonateButton>
                    {menuOpen ? <CloseIcon style={{ fontSize: '250%' }} onClick={handleMenuClick}/> : <MenuIcon style={{ fontSize: '250%' }} onClick={handleMenuClick}/>}
                </MenuButtonWrapper>
                
            </HeaderWrapper>
            {menuOpen && <Menu>
                <MenuLink to="/mccmd/about-us" onClick={handleMenuClick}>About Us</MenuLink>
                <MenuLink to="#" onClick={handleServicesClick}>Services</MenuLink>
                {servicesOpen && <>
                    <ServiceLink to="/mccmd/imam" onClick={handleMenuClick}>Shahadas</ServiceLink>
                    <ServiceLink to="/mccmd/imam" onClick={handleMenuClick}>Meet the Imam</ServiceLink>
                    <ServiceLink to="/mccmd/clinic" onClick={handleMenuClick}>Clinic</ServiceLink>
                    <ServiceLink to="/mccmd/zakat" onClick={handleMenuClick}>Nikahs</ServiceLink>
                    <ServiceLink to="/mccmd/janazahs" onClick={handleMenuClick}>Janazahs</ServiceLink>
                    <ServiceLink to="/mccmd/zakat" onClick={handleMenuClick}>Zakat</ServiceLink>
                    <ServiceLink to="/mccmd/refugee-aid" onClick={handleMenuClick}>Food Pantry</ServiceLink>
                    <ServiceLink to="/mccmd/refugee-aid" onClick={handleMenuClick}>Refugee Aid</ServiceLink>
                    <ServiceLink to="/mccmd/general-events" onClick={handleMenuClick}>General Events</ServiceLink>
                    <ServiceLink to="/mccmd/guided-tours" onClick={handleMenuClick}>Guided Tours</ServiceLink>
                </>}
                <MenuLink to="/mccmd/education" onClick={handleMenuClick}>Education</MenuLink>
                <MenuLink to="/mccmd/community" onClick={handleMenuClick}>Community</MenuLink>
                <MenuLink to="/mccmd/get-involved" onClick={handleMenuClick}>Get Involved</MenuLink>
                <MenuLink to="/mccmd/contact-us" onClick={handleMenuClick}>Contact Us</MenuLink>
                <MCCLiveLink href="https://www.youtube.com/@MCCMD" onClick={handleMenuClick}>MCC Live</MCCLiveLink>
                <MenuLink to="/mccmd/login" onClick={handleMenuClick}>Login</MenuLink>
                <Icons>
                    <IconLink href='#'><EmailIcon style={{ fontSize: '175%' }}/></IconLink>
                    <IconLink href='https://www.facebook.com/mccmaryland/'><FacebookIcon style={{ fontSize: '175%' }}/></IconLink>
                    <IconLink href='https://www.instagram.com/mccmaryland/'><InstagramIcon style={{ fontSize: '175%' }}/></IconLink>
                    <IconLink href='https://www.youtube.com/@MCCMD'><YouTubeIcon style={{ fontSize: '175%' }}/></IconLink>
                </Icons>
            </Menu>} 
        </>
    )
}

export default Header;
