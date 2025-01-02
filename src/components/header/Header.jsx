import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import navBarData from './AppData';
import HeaderStyles from '../../styles/HeaderStyles.module.css';
import HeaderLogo from '../../images/logo/SolvasLogo.png';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div>
      <nav className={HeaderStyles.headerContainer}>
        {/* Logo */}
        <div className={HeaderStyles.headerLogo}>
          <Link to={'/'}><img src={HeaderLogo} alt="Logo" /></Link>
        </div>

        {/* Mobile Toggle Button */}
        <div className={HeaderStyles.appToggle}>
          <button onClick={toggleMenu}>
            {menuActive ? '' : '☰'}
          </button>
        </div>

        {/* Navigation Links */}
        <ul className={`${HeaderStyles.headerLinks} ${menuActive ? HeaderStyles.active : ''}`}>
          {navBarData.map((list, index) => (
            <li key={index}>
              <Link to={list.path} onClick={() => setMenuActive(false)}>
                {list.text}
              </Link>
            </li>
          ))}
          <button className={HeaderStyles.joinButton}>
            <Link to={'/option'}>Join</Link>

            </button>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
