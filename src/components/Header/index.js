import React from "react";
import HeaderLogin from "./HeaderLogin";
import HeaderSearch from "./HeaderSearch";

import logo from "./../../img/logo.png";

import "./Header.css";


const Header = () => {
  return (
    <header className="header">
      <a className="logo_link" href="/">
        <img src={logo} alt="website-planet" />
        <span>MateBook</span>
      </a>

      <HeaderSearch />
      <HeaderLogin />
    </header>
  );
};

export default Header;
