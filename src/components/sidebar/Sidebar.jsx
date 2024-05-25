import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h1>Dashboard</h1>
      <div className="sidebarLinks">
        <NavLink to={"/admin"}>E'lon qo'shish</NavLink>
        <NavLink to={"/admin/all-products"}>E'lonlar</NavLink>
        <NavLink to={"/admin/control-products"}>E'lon boshqaruvi</NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
