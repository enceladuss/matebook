import React from "react";

import searchIcon from "../../../img/search.svg";

import "./HeaderSearch.scss";

const HeaderSearch = () => {
  return (
    <form className="header_search">
      <input type="text" placeholder="Search People, Pages, Groups etc" />
      <button type="submit" className="header_search__btn">
        <img src={searchIcon} alt="search" />
      </button>
    </form>
  );
};

export default HeaderSearch;
