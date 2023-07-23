import styled from 'styled-components';
// import MCCLogoLarge from '../assets/logo.png';
import MCCLogo from '../assets/logo-small.png';
import MenuIcon from '@mui/icons-material/Menu';

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

const MenuWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-grow: 1;
`;

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

function Header() {
    return (
        <HeaderWrapper>
            <LogoWrapper><Logo src={MCCLogo} alt="logo" /></LogoWrapper>
            <MenuWrapper>
                <DonateButton>Donate</DonateButton>
                <MenuIcon style={{ fontSize: '250%' }}/>
            </MenuWrapper>          
        </HeaderWrapper>
    )
}

export default Header