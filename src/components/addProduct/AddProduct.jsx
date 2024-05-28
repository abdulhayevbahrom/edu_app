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
    minPrice: "",
    location: "",
    phoneNumber: "",
    categories: "",
    description: "",
    tg: "",
    fb: "",
    inst: "",
    locationIframe: "",
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
        console.log(res);
        if (res.data.state) {
          enqueueSnackbar("E'lon yaratildi", {
            variant: "success",
          });
          setFormData({
            title: "",
            price: "",
            minPrice: "",
            location: "",
            phoneNumber: "",
            categories: "",
            description: "",
            tg: "",
            fb: "",
            inst: "",
            locationIframe: "",
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
        style={{ width: pathname === "/add-product" && "100%" }}
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
          <div className="social_wrap">
            <input
              type="text"
              id="location"
              name="location"
              value={formValues.location}
              onChange={handleChange}
            />
            <input
              type="text"
              id="location"
              name="locationIframe"
              value={formValues.locationIframe}
              onChange={handleChange}
              placeholder="iframe kodi"
            />
          </div>
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
          <div className="social_wrap">
            <input
              type="number"
              id="price"
              name="minPrice"
              value={formValues.minPrice}
              onChange={handleChange}
              required
              placeholder="min:"
            />
            <input
              type="number"
              id="price"
              name="price"
              value={formValues.price}
              onChange={handleChange}
              required
              placeholder="max:"
            />
          </div>
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

        <div className="form-group social">
          <label htmlFor="description">
            Ijtimoiy tarmoqlar : (username kiriting)
          </label>
          <div className="social_wrap">
            <input
              type="text"
              id="fb"
              name="tg"
              value={formValues.tg}
              onChange={handleChange}
              placeholder="Telegram"
            />
            <input
              type="text"
              id="fb"
              name="fb"
              value={formValues.fb}
              onChange={handleChange}
              placeholder="Facebook"
            />
            <input
              type="text"
              id="inst"
              name="inst"
              value={formValues.inst}
              onChange={handleChange}
              placeholder="Instagram"
            />
          </div>
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
