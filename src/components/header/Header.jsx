import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";

function Header() {
  let userInfo = JSON.parse(localStorage.userInfo || "{}")?.admin;
  return (
    <header>
      <h1>Edu</h1>
      <nav>
        <Link to={"/"}>E'lonlar</Link>
        <Link to="/login">
          {window.innerWidth > 523 ? "Kirish" : <FaUserCircle />}
        </Link>
        {!userInfo && (
          <Link to="/register">
            {window.innerWidth > 523 ? "Royxatdan o'tish" : <FaUserPlus />}
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
