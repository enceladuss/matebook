import React from "react";

import userImg from "./../../img/user.jpg";

import c from "./HeaderLogin.module.css";


const HeaderLogin = () => {
  return (
    <div className={`${c.login_wrapp}`}>
      <span>Jack Carter</span>
      <div className={`${c.user_img__wrapp}`}>
        <img src={userImg} alt="" />
      </div>
    </div>
  );
};

export default HeaderLogin;
