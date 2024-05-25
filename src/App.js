import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./routes/home/Home";
import Login from "./routes/Login/Login";
import Header from "./components/header/Header";
import SinglePage from "./routes/singlepage/SinglePage";
import Admin from "./routes/admin/Admin";
import { SnackbarProvider } from "notistack";
import Register from "./routes/register/Register";
import AddProduct from "./components/addProduct/AddProduct";
import { Auth } from "./routes/Login/Auth";

function app() {
  const user = JSON.parse(localStorage.userInfo || "{}")?.admin;
  return (
    <div className="app">
      <SnackbarProvider />
      <Header />
      <Outlet />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route element={<Auth />}>
          <Route path="/" element={<Outlet />}>
            <Route path="edu/:id" element={<SinglePage />} />
            <Route
              path="/admin/*"
              element={user?.role === "admin" ? <Admin /> : <Login />}
            />
            <Route path="/add-product" element={<AddProduct />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default app;
