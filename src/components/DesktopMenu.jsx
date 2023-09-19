import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';

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

const DropdownContent = styled.div`
  display: none;
  flex-direction: column;
  position: absolute;
  left: -34px;
  z-index: 2; // Adjust as needed
  background-color: #333; // Match the background color
  padding: 30px;
  padding-top: 22px;
  padding-bottom: 24px;
  border-radius: 12px;
`;

const DropdownContainer = styled.div`
  position: relative;

  &:hover ${DropdownContent} {
    display: flex;
    gap: 20px;
  }
`;

function DesktopMenu() {
  return (
    <DesktopMenuContainer>
      <DesktopMenuWrapper>
        {[
          'About Us',
          'Services',
          'Education',
          'Community',
          'Get Involved',
          'Donate',
        ].map((item, index) => (
          <DropdownContainer key={index}>
            <DesktopMenuLink
              to={`/mccmd/${item.toLowerCase().replace(/ /g, '-')}`}
            >
              {item}
            </DesktopMenuLink>
            {item === 'Services' && (
              <DropdownContent>
                <DesktopMenuLink to="/mccmd/imams-corner">
                  Imam's Corner
                </DesktopMenuLink>
                <DesktopMenuLink to="/mccmd/refugee-aid">
                  Refugee Aid
                </DesktopMenuLink>
                <DesktopMenuLink to="/mccmd/convert-care">
                  Convert Care
                </DesktopMenuLink>
                <DesktopMenuLink to="/mccmd/marriage">Marriage</DesktopMenuLink>
                <DesktopMenuLink to="/mccmd/janazas">Janazas</DesktopMenuLink>
                <DesktopMenuLink to="/mccmd/zakat">Zakat</DesktopMenuLink>
                <DesktopMenuLink to="/mccmd/food-pantry">
                  Food Pantry
                </DesktopMenuLink>
              </DropdownContent>
            )}

            {item === 'About Us' && (
              <DropdownContent>
                <DesktopMenuLink to="/mccmd/committees">
                  Committees
                </DesktopMenuLink>
                <DesktopMenuLink to="/mccmd/contact-us">
                  Contact Us
                </DesktopMenuLink>
              </DropdownContent>
            )}
          </DropdownContainer>
        ))}
      </DesktopMenuWrapper>
    </DesktopMenuContainer>
  );
}

export default DesktopMenu
