import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const menuList = ["전체", "리니어", "택타일", "저소음", "게이밍"];

  return (
    <div className="navigation">
      <div className="top-menu">
        <div className="login-button">
          <i>
            <FontAwesomeIcon icon={faUser} />
          </i>
          <p>로그인</p>
        </div>
        <div className="search-bar">
          <i>
            <FontAwesomeIcon icon={faSearch} />
          </i>
        </div>
      </div>
      <div className="logo-image">
        <img src="https://cdn.imweb.me/thumbnail/20240609/65c4aa6f22e32.png" alt="스웨그키" />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
