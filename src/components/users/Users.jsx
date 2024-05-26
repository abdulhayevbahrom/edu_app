import React, { useEffect, useState } from "react";
import "./Users.css";
import { FaTrash, FaCheck } from "react-icons/fa";
import axios from "../../api";
import { enqueueSnackbar as message } from "notistack";
import Loader from "../loader/Loader";
import { capitalizeFirstLetter } from "../../hooks/CapitalizeFirstLitter";
import { PhoneNumberFormat } from "../../hooks/NumberFormat";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    axios
      .get("/admins")
      .then((res) => {
        if (res.data.state) {
          setUsers(res?.data?.innerData);
        }
      })
      .catch((res) => console.log(res));
  }, [load]);

  const deleteUser = (id) => {
    if (window.confirm("Ushbu foydalanuvchini o'chirmoqchimisiz?")) {
      setLoad(true);
      axios
        .delete("/admins/" + id)
        .then((res) => {
          if (res.data.state) {
            setLoad(false);
            message("Foydalanuvchi ochirildi", { variant: "success" });
          }
        })
        .catch((res) => console.log(res));
    }
  };

  const editUser = (id, user) => {
    if (
      window.confirm(
        "Ushbu foydalanuvchini admin darajasiga ko'tarmoqchimisiz ?"
      )
    ) {
      setLoad(true);
      let { _id, __v, ...info } = user;
      info.role = "admin";
      axios
        .patch("/admins/" + id, info)
        .then((res) => {
          if (res.data.state) {
            setLoad(false);
            message("Foydalanuvchi admin darajasida", { variant: "success" });
          }
        })
        .catch((res) => console.log(res));
    }
  };

  return (
    <div
      className="users"
      style={{ alignItems: load ? "center" : "flex-start" }}
    >
      {load ? (
        <Loader />
      ) : (
        <table border={1}>
          <thead>
            <tr>
              <th>Ism</th>
              <th>Familiya</th>
              <th>Yoshi</th>
              <th>Yoshi</th>
              <th>Username</th>
              <th>Password</th>
              <th>Role</th>
              <th>Boshqaruv</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={index}>
                <td>{capitalizeFirstLetter(user.firstname)}</td>
                <td>{capitalizeFirstLetter(user.lastname)}</td>
                <td>{user.age}</td>
                <td> +998 {PhoneNumberFormat(user.phoneNumber.toString())}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{capitalizeFirstLetter(user.role)}</td>
                <td>
                  <FaTrash onClick={() => deleteUser(user._id)} />
                  {user.role !== "admin" && (
                    <FaCheck onClick={() => editUser(user._id, user)} />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Users;
