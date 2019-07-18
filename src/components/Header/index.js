import React from 'react';

import './styles.scss';
import Logo from '../../assets/23569861-sample-grunge-red-round-stamp.jpg';

const Header = (props) => (
  <header data-test="headerComponent">
    <div className="wrap">
      <div className="logo">
        <img data-test="logoImg" src={Logo} alt="logo" />
        <span className="brandName">Header</span>
      </div>
    </div>
  </header>
);

export default Header;
