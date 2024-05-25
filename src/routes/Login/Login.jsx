import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar as es } from "notistack";
import axios from "../../api";

const Login = () => {
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    const foemData = new FormData(e.target);
    const value = Object.fromEntries(foemData);

    axios
      .post("/admins/sign-in", value)
      .then((res) => {
        let info = res?.data?.innerData;
        if (res.data.state) {
          localStorage.setItem("userInfo", JSON.stringify(info));
          info.admin.role === "admin"
            ? navigate("/admin")
            : navigate("/add-product");
          es("Tizimga xush kelibsiz!", { variant: "success" });
          window.location.reload();
          return;
        }
      })
      .catch((err) => {
        es("Login yoki parol xato!", { variant: "warning" });
      });
  };

  return (
    <div className="page login">
      <form onSubmit={handelSubmit}>
        <h1>Kirish</h1>
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          autoComplete="off"
          autoFocus
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <input type="submit" value="Tizimga kirish" />
      </form>
    </div>
  );
};

export default Login;
