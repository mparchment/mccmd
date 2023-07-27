import { useState } from 'react';
import MenuContext from './MenuContext';
import PropTypes from 'prop-types';

const MenuProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <MenuContext.Provider value={{ menuOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

MenuProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MenuProvider;
