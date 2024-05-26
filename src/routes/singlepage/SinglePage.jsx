import React, { useEffect, useState } from "react";
import "./SinglePage.css";
import { useParams } from "react-router-dom";
import axios from "../../api";
import Loader from "../../components/loader/Loader";
import Footer from "../../components/footer/Footer";
import { capitalizeFirstLetter } from "../../hooks/CapitalizeFirstLitter";
import { PhoneNumberFormat, NumberFormat } from "../../hooks/NumberFormat";

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
              <h2>{capitalizeFirstLetter(product?.title)}</h2>
              <p className="desc">{product?.description}</p>
              <p>Manzil: {product?.location}</p>
              <p>
                Telefon: +998{" "}
                {PhoneNumberFormat(product?.phoneNumber.toString())}
              </p>
              <p>Mavjud kurslar: {product?.categories} </p>
              <p>
                Kurslar narxi: <span>{NumberFormat(product?.price)} </span> So'm
              </p>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default SinglePage;
