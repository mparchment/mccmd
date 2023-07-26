import styled from 'styled-components';
// import MCCLogoLarge from '../assets/logo.png';
import MCCLogo from '../assets/logo-small.png';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect, useContext } from 'react';
import { HeaderContext } from '../contexts/HeaderContext';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';

import { Link } from 'react-router-dom';

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
    height: ${props => `calc(100vh - ${props.$headerHeight}px)`};
    background-color: #fff;
    z-index: 1;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
    gap: 30px;
    font-weight: bold;
    font-size: 23px;
`;

const MenuLink = styled(Link)`
    margin-left: 40px;
    border-bottom: 2px solid #000;
    width: fit-content;

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

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);
    const { headerHeight } = useContext(HeaderContext);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    }

    // This effect will run whenever menuOpen state changes
    useEffect(() => {
        // If the menu is open, we'll disable scrolling on the body
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            // Otherwise, re-enable scrolling
            document.body.style.overflow = 'unset';
        }

        // Cleanup function to prevent effects on unmount
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [menuOpen]); // Rerun the effect when `menuOpen` state changes

    return (
        <>
            <HeaderWrapper>
                <LogoWrapper><Link to="/mccmd"><Logo src={MCCLogo} alt="logo" /></Link></LogoWrapper>
                <MenuButtonWrapper>
                    <DonateButton>Donate</DonateButton>
                    {menuOpen ? <CloseIcon style={{ fontSize: '250%' }} onClick={handleMenuClick}/> : <MenuIcon style={{ fontSize: '250%' }} onClick={handleMenuClick}/>}
                    
                </MenuButtonWrapper>
                
            </HeaderWrapper>
            {menuOpen && <Menu $headerHeight={headerHeight}>
                <MenuLink to="/mccmd/about" onClick={handleMenuClick}>About Us</MenuLink>
                <MenuLink to="#" onClick={handleMenuClick}>Services</MenuLink>
                <MenuLink to="/mccmd/education" onClick={handleMenuClick}>Education</MenuLink>
                <MenuLink to="/mccmd/community" onClick={handleMenuClick}>Community</MenuLink>
                <MenuLink to="/mccmd/getconnected" onClick={handleMenuClick}>Get Connected</MenuLink>
                <MenuLink to="/mccmd/volunteering" onClick={handleMenuClick}>Volunteering</MenuLink>
                <MenuLink to="/mccmd/contactus" onClick={handleMenuClick}>Contact Us</MenuLink>
                <MenuLink to="#" onClick={handleMenuClick}>MCC Live</MenuLink>
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
