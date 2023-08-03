import { useRef, useEffect, useState } from 'react';
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
    
    border-bottom: 2px solid transparent; // Add this line
    
    transition: border-bottom 0.3s ease; // Add this line
`;

const DesktopMenuWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 100px;
  width: 100%;
`;

const SlidingUnderline = styled.div`
  position: absolute;
  bottom: 0;
  height: 2px;
  background-color: #b98474;
  transition: left 0.3s ease, width 0.3s ease, opacity 0.3s ease;
  width: 0;
  opacity: 0;
`;


function DesktopMenu(){
    const [underlineLeft, setUnderlineLeft] = useState(0);
    const [underlineWidth, setUnderlineWidth] = useState(0);
    const [underlineOpacity, setUnderlineOpacity] = useState(0); // Add this line

    const menuRefs = useRef([]);

    const handleMouseOver = (index) => {
      const { offsetLeft, offsetWidth } = menuRefs.current[index];
      setUnderlineLeft(offsetLeft);
      setUnderlineWidth(offsetWidth);
      setUnderlineOpacity(1); // Add this line
    };

    const handleMouseLeave = () => {
      setUnderlineWidth(0);
      setUnderlineOpacity(0); // Add this line
    };
  
    useEffect(() => {
      menuRefs.current = menuRefs.current.slice(0, 7);
    }, []);

    return (
        <DesktopMenuContainer>
            <DesktopMenuWrapper onMouseLeave={handleMouseLeave}>
                {['About Us', 'Services', 'Education', 'Community', 'Get Involved', 'Contact Us', 'Donate'].map((item, index) => (
                <DesktopMenuLink
                    ref={(el) => (menuRefs.current[index] = el)}
                    to={`/mccmd/${item.toLowerCase().replace(/ /g, '-')}`}
                    onMouseOver={() => handleMouseOver(index)}
                    key={index}
                >
                    {item}
                </DesktopMenuLink>
                ))}
                <SlidingUnderline style={{ left: underlineLeft, width: underlineWidth, opacity: underlineOpacity }} />
            </DesktopMenuWrapper>
        </DesktopMenuContainer>
    )
}

export default DesktopMenu
