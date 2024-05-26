import React, { useState } from "react";
import "./AddProduct.css";
import axios from "../../api";
import { enqueueSnackbar } from "notistack";
import { useLocation } from "react-router-dom";
import { FaCloudUploadAlt } from "react-icons/fa";

function AddProduct() {
  const { pathname } = useLocation();
  const [formValues, setFormData] = useState({
    title: "",
    price: "",
    location: "",
    phoneNumber: "",
    categories: "",
    description: "",
  });
  const [images, setImages] = useState("");
  const [load, setLoad] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    setLoad(true);
    e.preventDefault();
    let formData = new FormData();

    // image yuklash
    Array.from(images).forEach((i) => {
      formData.append("images", i, i.name);
    });

    for (let key in formValues) {
      formData.append(key, formValues[key]);
    }

    axios
      .post("/products", formData)
      .then((res) => {
        if (res.data.state) {
          enqueueSnackbar("E'lon yaratildi", {
            variant: "success",
          });
          setFormData({
            title: "",
            price: "",
            location: "",
            phoneNumber: "",
            categories: "",
            description: "",
          });
          setImages("");
          setLoad(false);
        }
      })
      .catch((res) => console.log(res));
  };
  return (
    <div
      className={
        pathname !== "/add-product" ? "addProduct" : "addProduct extraClass"
      }
    >
      <form
        style={{ width: pathname === "/add-product" && "400px" }}
        onSubmit={handleSubmit}
      >
        {pathname === "/add-product" && <h2>E'lon qo'shish</h2>}
        <div className="form-group">
          <label htmlFor="title">O'quv markaz nomi</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formValues.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Manzil</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formValues.location}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Telefon</label>
          <input
            type="number"
            id="phoneNumber"
            name="phoneNumber"
            value={formValues.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="categories">Mavjud kurslar</label>
          <input
            type="text"
            id="categories"
            name="categories"
            value={formValues.categories}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Kurs narxi</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formValues.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Batafsil malumot</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            value={formValues.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="images">
            <p>
              Rasm yuklash <FaCloudUploadAlt />{" "}
            </p>
          </label>
          <input
            type="file"
            id="images"
            name="images"
            multiple
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => setImages(e.target.files)}
          />
        </div>
        <div className="form-group">
          <button type="submit">{load ? "Yuborilmoqda..." : "Yuborish"}</button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
