import styled from 'styled-components';
// import MCCLogoLarge from '../assets/logo.png';
import MCCLogo from '../assets/logo-small.png';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect, useContext } from 'react';
import { HeaderContext } from '../contexts/HeaderContext';

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

    & > div {
        margin-left: 40px;
        border-bottom: 2px solid #000;
        width: fit-content;
    }

    & > div:first-child {
        margin-top: 15px;
    }
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
                <div>About Us</div>
                <div>Services</div>
                <div>Education</div>
                <div>Community</div>
                <div>Get Connected</div>
                <div>Contact Us</div>
                <div>MCC Live</div>
                <div>Login</div>
            </Menu>} 
        </>
    )
}

export default Header;
