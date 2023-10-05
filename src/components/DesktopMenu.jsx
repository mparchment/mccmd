import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import PropTypes from 'prop-types';

const DesktopMenuContainer = styled.div`
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: right;
    gap: 30px;
`;

const DesktopMenuLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  position: relative;
  line-height: 3;  // Adjust as per your need
`;

const ServicesLink = styled.span`
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  position: relative;
  user-select: none;
  line-height: 3;  // Adjust as per your need
`;

const DropdownLinkStyled = styled(Link)`
  display: block;
  padding: 15px 20px;
  width: 100%;
  box-sizing: border-box;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  &:hover {
    background-color: #555;
    color: #fff;
    cursor: pointer;
    
    &:first-child {
      border-radius: 5px 5px 0 0;
    }

    &:last-child {
      border-radius: 0 0 5px 5px;
    }
  }
`;

const DropdownContentStyled = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  background-color: #333;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;
  border-radius: 5px;
  width: auto;
  text-align: center;
  min-width: 150px;
  box-shadow: 0 1px 9px #333;
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  transform: translateX(-50%) translateY(${(props) => (props.isOpen ? '0' : '10px')});
  transition: opacity 0.3s, transform 0.3s, visibility 0.3s;
`;


const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;  // To take as little space as possible horizontally
`;

function Dropdown({ label, labelHref, links }) {
  const [isOpen, setIsOpen] = useState(false);
  
  // Checking if there are links to display in the dropdown
  const hasLinks = links && links.length > 0;

  const handleMouseEnter = () => hasLinks && setIsOpen(true);
  const handleMouseLeave = () => hasLinks && setIsOpen(false);

  return (
    <DropdownContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {labelHref ? (
        <DesktopMenuLink to={labelHref}>
          {label}
        </DesktopMenuLink>
      ) : (
        <ServicesLink>
          {label}
        </ServicesLink>
      )}
      {hasLinks && (
        <DropdownContentStyled isOpen={isOpen}>
          {links.map((link) => (
            <DropdownLinkStyled to={link.href} key={link.href}>
              {link.label}
            </DropdownLinkStyled>
          ))}
        </DropdownContentStyled>
      )}
    </DropdownContainer>
  );
}

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  labelHref: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

function DesktopMenu() {
  return (
    <DesktopMenuContainer>
      <Dropdown
        label="About Us"
        labelHref="/mccmd/about-us"
        links={[
          { label: "Committees", href: "/mccmd/committees" },
          { label: "Contact Us", href: "/mccmd/contact-us" },
        ]}
      />
      <Dropdown
        label="Services"
        links={[
          { label: "Imam's Corner", href: "/mccmd/imams-corner" },
          { label: "Refugee Aid", href: "/mccmd/refugee-aid" },
          { label: "Convert Care", href: "/mccmd/convert-care" },
          { label: "Marriage", href: "/mccmd/marriage" },
          { label: "Janazas", href: "/mccmd/janazas" },
          { label: "Zakat", href: "/mccmd/zakat" },
          { label: "Food Pantry", href: "/mccmd/food-pantry" },
        ]}
      />
      <Dropdown
        label="Education"
        labelHref="/mccmd/education"
      />
      <Dropdown
        label="Community"
        labelHref="/mccmd/community"
      />
      <Dropdown
        label="Get Involved"
        labelHref="/mccmd/get-involved"
      />
      <Dropdown
        label="Donate"
        labelHref="/mccmd/donate"
      />
    </DesktopMenuContainer>
  );
}

export default DesktopMenu
