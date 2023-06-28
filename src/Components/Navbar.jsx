import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalStates } from './utils/global.context';

const Navbar = () => {
  const { themeState, themeDispatch } = useGlobalStates();

  const switchTheme = () => {
    if (themeState.theme) {
      themeDispatch({ type: 'SWITCH_LIGHT' });
    } else {
      themeDispatch({ type: 'SWITCH_DARK' });
    }
  };

  return (
    <div className={themeState.className}>
      <nav>
        <Link to="/">
          <h1>
            <span>D</span>H
          </h1>
        </Link>
        <button className="themeButton" onClick={switchTheme}>
          {themeState.theme ? 'light' : 'dark'}
        </button>
        <div>
          <Link to="/">
            <h3>Home</h3>
          </Link>
          <Link to="/favs">
            <h3>Favoritos</h3>
          </Link>
          <Link to="/contact">
            <h3>Contacto</h3>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;