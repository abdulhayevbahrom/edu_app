import React, { useEffect, useState } from "react";
import "./SinglePage.css";
import { useParams } from "react-router-dom";
import axios from "../../api";
import Loader from "../../components/loader/Loader";
import Footer from "../../components/footer/Footer";
import { capitalizeFirstLetter } from "../../hooks/CapitalizeFirstLitter";
import { PhoneNumberFormat, NumberFormat } from "../../hooks/NumberFormat";
import { FaFacebook, FaTelegram } from "react-icons/fa";
import intagram from "./instalogo.jpeg";

function SinglePage() {
  const { id } = useParams();
  const [index, setIndex] = useState(0);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`products/single/${id}`)
      .then((res) => {
        if (res?.data?.state) {
          setProduct(res?.data?.innerData);
        }
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <>
      <div
        style={{
          display: !product ? "flex" : "grid",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="singlePage"
      >
        {!product ? (
          <Loader />
        ) : (
          <>
            <div className="left">
              <figure>
                <img src={product?.images[index]} alt="" />
              </figure>

              <div className="imgs">
                {product?.images?.map((url, index) => (
                  <img
                    onClick={() => {
                      setIndex(index);
                    }}
                    src={url}
                    key={index}
                    alt=""
                  />
                ))}
              </div>
            </div>
            <div className="right">
              <>
                <h2>{capitalizeFirstLetter(product?.title)}</h2>
                <p className="desc">{product?.description}</p>
                <p>Manzil: {product?.location}</p>
                <p>
                  Telefon: +998{" "}
                  {PhoneNumberFormat(product?.phoneNumber.toString())}
                </p>
                <p>Mavjud kurslar: {product?.categories} </p>
                <p>
                  Kurslar narxi:
                  <span>
                    {NumberFormat(product?.price)} -{" "}
                    {NumberFormat(product.minPrice)}
                  </span>{" "}
                  So'm
                </p>
              </>

              <div className="sociall">
                <span>
                  Ijtimoiy tarmoqlar: <br />
                </span>
                <div className="social_icons">
                  <a target="_blank" href={`https://t.me/${product.tg}`}>
                    <FaTelegram />
                  </a>
                  <a
                    target="_blank"
                    href={`https://instagram.com/${product.inst}`}
                  >
                    <img src={intagram} alt="" />
                  </a>
                  <a
                    target="_blank"
                    href={`https://facebook.com/${product.fb}`}
                  >
                    <FaFacebook />
                  </a>
                </div>
              </div>

              <iframe
                src={product.locationIframe}
                width="400"
                height="200"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default SinglePage;
