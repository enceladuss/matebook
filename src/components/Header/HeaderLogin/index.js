import React from "react";

import userImg from "../../../img/user.jpg";

import "./HeaderLogin.css";

const HeaderLogin = () => {
  return (
    <div className="login_wrapp">
      <span>Jack Carter</span>
      <div className="user_img__wrapp">
        <img src={userImg} alt="" />
      </div>
    </div>
  );
};

export default HeaderLogin;
