import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRightFromBracket,
  faBars,
  faSearch,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuList = ["전체", "리니어", "택타일", "저소음", "게이밍"];
  const navigate = useNavigate();

  // 엔터키 입력시 검색
  const search = (event) => {
    if (event.key === "Enter") {
      // 입력한 검색어를 읽어와서
      let keyword = event.target.value;
      // url 을 바꿔준다
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div className="navigation">
      <div className="top-menu">
        {menuOpen && <div className="dimmed" onClick={() => setMenuOpen(false)}></div>}
        <div className="mo-menu mo" onClick={() => setMenuOpen(true)}>
          <i>
            <FontAwesomeIcon icon={faBars} />
          </i>
        </div>

        <div className="all">
          {authenticate ? (
            <div
              className="login-button"
              onClick={() => {
                setAuthenticate(false);
                navigate("/");
              }}
            >
              <i>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
              </i>
            </div>
          ) : (
            <div className="login-button" onClick={() => navigate("/login")}>
              <i>
                <FontAwesomeIcon icon={faUser} />
              </i>
            </div>
          )}

          <div className={`search-bar ${isOpen ? "active" : ""}`}>
            <i>
              <FontAwesomeIcon
                icon={faSearch}
                className="search-icon"
                onClick={() => setIsOpen(!isOpen)}
              />
            </i>
            <input placeholder="검색어를 입력하세요" onKeyPress={(event) => search(event)} />
          </div>
        </div>
      </div>
      <div className="logo-image">
        <img
          src="https://cdn.imweb.me/thumbnail/20240609/65c4aa6f22e32.png"
          alt="스웨그키"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <div className={`menu-area ${menuOpen ? "active" : ""}`}>
        <div className="mo close-button">
          <i onClick={() => setMenuOpen(false)}>
            <FontAwesomeIcon icon={faXmark} />
          </i>
        </div>
        <ul className="menu-list">
          {menuList.map((menu, idx) => (
            <li key={idx}>{menu}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
