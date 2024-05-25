import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  let userInfo = JSON.parse(localStorage.userInfo || "{}")?.admin;
  return (
    <header>
      <h1>Edu</h1>
      <nav>
        <Link to={"/"}>E'lonlar</Link>
        <Link to="/login">Kirish</Link>
        {!userInfo && <Link to="/register">Royxatdan o'tish</Link>}
      </nav>
    </header>
  );
}

export default Header;
