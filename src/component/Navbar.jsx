import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuList = ["전체", "리니어", "택타일", "저소음", "게이밍"];

  return (
    <div className="navigation">
      <div className="top-menu">
        <div className="login-button">
          <i>
            <FontAwesomeIcon icon={faUser} />
          </i>
        </div>
        <div className={`search-bar ${isOpen ? "active" : ""}`}>
          <FontAwesomeIcon
            icon={faSearch}
            className="search-icon"
            onClick={() => setIsOpen(!isOpen)}
          />
          <input placeholder="검색어를 입력하세요" />
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
