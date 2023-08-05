import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DesktopMenuContainer = styled.div`
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 120px;
    background-color: #333;
    padding: 15px 0;
`;

const DesktopMenuLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    transform: translateX(0);
    height: 2px;
    width: 0;
    background-color: #b98474;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
    left: 0;
    transform: translateX(0);
  }
`;


const DesktopMenuWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 100px;
  width: 100%;
`;

function DesktopMenu(){
    return (
        <DesktopMenuContainer>
            <DesktopMenuWrapper>
                {['About Us', 'Services', 'Education', 'Community', 'Get Involved', 'Contact Us', 'Donate'].map((item, index) => (
                <DesktopMenuLink
                    to={`/mccmd/${item.toLowerCase().replace(/ /g, '-')}`}
                    key={index}
                >
                    {item}
                </DesktopMenuLink>
                ))}
            </DesktopMenuWrapper>
        </DesktopMenuContainer>
    )
}

export default DesktopMenu
