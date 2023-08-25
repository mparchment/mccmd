import styled from 'styled-components';
import MCCLogo from '../assets/logo-small.png';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import DesktopMenu from './DesktopMenu';
import MenuContext from '../contexts/MenuContext';
import TimesContext from '../contexts/TimesContext';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MobileMenu from './MobileMenu';
import useIsMobile from '../hooks/useIsMobile';
import PrayerTimes from './PrayerTimes';
import AuthModal from './AuthModal';
import AuthContext from '../contexts/AuthContext';
import { auth } from '../firebase-config';
import { useEffect, useState } from 'react';

const HeaderWrapper = styled.div`
    height: 67px;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
    position: relative; // Added this line

    @media (min-width:1366px) {
        width: 98%;
        margin: 0 auto;
        padding-top: 20px;
        padding-bottom: 20px;
        flex-direction: row;
        align-items: center;
    }
`;

const CenteredContent = styled.div`
    position: absolute; // Added this line
    top: 50%; // Added this line
    left: 50%; // Added this line
    transform: translate(-50%, -50%); // Added this line
    display: flex;
    width: 64%;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1366px) {
        width: 95%;
    }
`;

const AccountInfo = styled.div`
    margin-left: auto;
    font-size: 12px;
    text-align: right;
    padding-right: 10px;
`;

const Button = styled.button`
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

const PrayerTimeWrapper = styled.div``;

const DateWrapper = styled.div`
    font-weight: bold;
    white-space: nowrap;

    @media (max-width: 1440px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const JummahWrapper = styled.div`
    text-align: center;
    margin-top: 10px;
    margin-bottom: 2px;
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 500;
`;

const Background = styled.div`
    background-color: #fff;
    width: 100%;
`;

const DateContainer = styled.div`
    @media (max-width: 1440px) {
        font-size: 12px;
    }
`;

const PageLink = styled(Link)`

`

const AuthLink = styled.button`
  background: none !important;
  border: none;
  padding: 0 !important;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
  text-decoration: underline;
  color: inherit;
`;

function Header() {
    const {menuOpen, closeMenu, toggleMenu} = useContext(MenuContext);
    const {hijriMonth, hijriDay, hijriYear} = useContext(TimesContext);
    const { isUserLoggedIn, userName } = useContext(AuthContext);

    const [isAuthModalOpen, setAuthModalOpen] = useState(false);

    const navigate = useNavigate();
    const openAuthModal = () => setAuthModalOpen(true);
    const closeAuthModal = () => setAuthModalOpen(false);

    const handleLogoClick = () => {
        closeMenu();
        // setServicesOpen(false);
    }

    const handleMenuClick = () => {
        toggleMenu();
        // setServicesOpen(false);
    }

    const isMobile = useIsMobile()
    
    const getCurrentDate = () => {
        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = currentDate.toLocaleString('default', { month: 'long' });
        const year = currentDate.getFullYear();
      
        let suffix;
        if (day % 10 === 1) {
          suffix = "st";
        } else if (day % 10 === 2) {
          suffix = "nd";
        } else if (day % 10 === 3) {
          suffix = "rd";
        } else {
          suffix = "th";
        }
      
        return (
          <>
            {day}
            <sup>{suffix}</sup>
            {` ${month} ${year}`}
          </>
        );
      };

    const dateString = getCurrentDate();
    const hijriString = `${hijriDay} ${hijriMonth} ${hijriYear}`;

    const handleMobileButtonClick = () => {
        if (isUserLoggedIn) {
            navigate('/mccmd/dashboard');
        } else {
            openAuthModal();
        }
    }

    return (
        <Background>
            {isMobile && <PrayerTimes/>}
            <Helmet>
                <meta property="og:title" content="Muslim Community Center"/>
                <meta property="og:description" content="Welcome to MCC - the place to be!"/>
                <meta property="og:image" content={MCCLogo}/>
            </Helmet>
            <HeaderWrapper>
                <CenteredContent>
                    <LogoWrapper><Link to="/mccmd/"><Logo src={MCCLogo} alt="logo" onClick={handleLogoClick}/></Link></LogoWrapper>
                    {!isMobile && <><DateWrapper><DateContainer>{dateString} · {hijriString} </DateContainer><JummahWrapper>{"1st Jumu'ah"}: 1:00 PM / {"2nd Jumu'ah"}: 2:00 PM</JummahWrapper></DateWrapper><PrayerTimeWrapper><PrayerTimes/></PrayerTimeWrapper></>}
                    {isMobile && <MenuButtonWrapper>
                        <Button onClick={handleMobileButtonClick}>
                            {isUserLoggedIn ? 'Donate' : 'Login'}
                        </Button>
                        {menuOpen ? <CloseIcon style={{ fontSize: '250%' }} onClick={handleMenuClick}/> : <MenuIcon style={{ fontSize: '250%' }} onClick={handleMenuClick}/>}
                    </MenuButtonWrapper>}
                </CenteredContent>
                {!isMobile && (
                    <AccountInfo>
                    <div>
                        {isUserLoggedIn ? `Welcome back, ${userName}.` : "Welcome to MCC!"}
                    </div>
                    <div>
                        {isUserLoggedIn ? (
                        <><PageLink to="/mccmd/dashboard">Dashboard</PageLink> | <PageLink to="/mccmd/account">Account</PageLink></>
                        ) : (
                        <AuthLink onClick={openAuthModal}>Sign In / Create Account</AuthLink>
                        )}
                    </div>
                    </AccountInfo>
                )}
            </HeaderWrapper>
            <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
            {!isMobile && <DesktopMenu/>}
            {isMobile && menuOpen && <MobileMenu/>} 
        </Background>
    )
    
}

export default Header;