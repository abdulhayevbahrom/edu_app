import React from "react";
import "./Admin.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import AddProduct from "../../components/addProduct/AddProduct";
import Products from "../../components/products/Products";
import Users from "../../components/users/Users";

function Admin() {
  return (
    <div className="admin">
      <Sidebar />
      <Routes>
        <Route path="/" element={<AddProduct />} />
        <Route path="/all-products" element={<Products />} />
        <Route path="/control-products" element={<Products />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default Admin;
