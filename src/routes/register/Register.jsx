import React from "react";
import "./Register.css";
import axios from "../../api";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let value = Object.fromEntries(formData);
    value.phoneNumber = +value.phoneNumber;
    value.age = +value.age;
    value.role = "user";

    axios
      .post("/admins", value)
      .then((res) => {
        if (res?.data?.state) {
          enqueueSnackbar("Royhatdan o'tish bajarildi", {
            variant: "success",
          });
          e.target.reset();
          navigate("/login");
        }
      })
      .catch((err) => {
        enqueueSnackbar(err.response.data.msg, {
          variant: "warning",
        });
      });
  };

  return (
    <div className="register">
      <form onSubmit={onSubmit} className="register_form">
        <h1 className="register_caption">Royxatdan o'tish</h1>
        <input type="text" name="firstname" required placeholder="Ism" />
        <input type="text" name="lastname" required placeholder="Familiya" />
        <input type="number" name="age" placeholder="Yosh" />
        <input type="number" name="phoneNumber" placeholder="Telefon" />
        <input type="text" name="username" required placeholder="Username" />
        <input type="text" name="password" required placeholder="Password" />
        <input type="submit" value="Royxatdan o'tish" />
      </form>
    </div>
  );
}

export default Register;
//  /[0-9]/
