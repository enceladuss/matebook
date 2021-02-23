import React from "react";

import searchIcon from "../../img/search.svg";

import c from "./HeaderSearch.module.css";

const HeaderSearch = () => {
  return (
    <form className={`${c.header_search}`}>
      <input type="text" placeholder="Search People, Pages, Groups etc" />
      <button type="submit" className={`${c.header_search__btn}`}>
        <img src={searchIcon} alt="search" />
      </button>
    </form>
  );
};

export default HeaderSearch;
