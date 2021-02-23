import React from "react";

import profileImg from "../../img/icons/profile.png";
import newsImg from "../../img/icons/news.png";
import messageImg from "../../img/icons/message.png";
import settingsImg from "../../img/icons/settings.png";

import c from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={c.nav}>
      <div className={c.nav_links}>
        <a href="#">
          <div className={c.nav_links__icon}>
            <img src={profileImg} alt="" />
          </div>
        </a>
        <a href="#">
          <div className={c.nav_links__icon}>
            <img src={newsImg} alt="" />
          </div>
        </a>
        <a href="#">
          <div className={c.nav_links__icon}>
            <img src={messageImg} alt="" />
          </div>
        </a>
        <a href="#">
          <div className={c.nav_links__icon}>
            <img src={settingsImg} alt="" />
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
