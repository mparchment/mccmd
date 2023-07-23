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
    font-size: 25px;
`;

const MenuLink = styled.a`
    margin-left: 40px;
    border-bottom: 2px solid #000;
    width: fit-content;

    &:first-child {
        margin-top: 15px;
    }

    &:hover {
        color: #b98474;
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
                <LogoWrapper><Logo src={MCCLogo} alt="logo" /></LogoWrapper>
                <MenuButtonWrapper>
                    <DonateButton>Donate</DonateButton>
                    {menuOpen ? <CloseIcon style={{ fontSize: '250%' }} onClick={handleMenuClick}/> : <MenuIcon style={{ fontSize: '250%' }} onClick={handleMenuClick}/>}
                    
                </MenuButtonWrapper>
                
            </HeaderWrapper>
            {menuOpen && <Menu $headerHeight={headerHeight}>
                <MenuLink>About Us</MenuLink>
                <MenuLink>Services</MenuLink>
                <MenuLink>Education</MenuLink>
                <MenuLink>Community</MenuLink>
                <MenuLink>Get Connected</MenuLink>
                <MenuLink>Volunteering</MenuLink>
                <MenuLink>Contact Us</MenuLink>
                <MenuLink>MCC Live</MenuLink>
                <MenuLink>Login</MenuLink>
                <Icons>
                    <FacebookIcon style={{ fontSize: '150%' }}/>
                    <InstagramIcon style={{ fontSize: '150%' }}/>
                    <YouTubeIcon style={{ fontSize: '150%' }}/>
                </Icons>
            </Menu>} 
        </>
    )
}

export default Header;
