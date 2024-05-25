import React, { useEffect, useState } from "react";
import "./Products.css";
import { Link, useLocation } from "react-router-dom";
import axios from "../../api";
import Loader from "../loader/Loader";

function Products() {
  const { pathname } = useLocation();
  const [products, setPoducts] = useState([]);
  const [load, setLoad] = useState(false);

  let path =
    pathname === "/admin/all-products" ||
    pathname === "/admin/control-products";

  let control = pathname === "/admin/control-products";

  useEffect(() => {
    axios
      .get("/products")
      .then((res) => {
        if (res.data.state) {
          control
            ? setPoducts(
                res.data.innerData?.filter((p) => p.isActive === false)
              )
            : pathname === "/"
            ? setPoducts(res.data.innerData?.filter((p) => p.isActive === true))
            : setPoducts(res.data.innerData);
        }
      })
      .catch((err) => console.error(err));
  }, [pathname, load]);

  const activedProduct = (pro) => {
    let confirmation = window.confirm("E'lonni bilan tanishdingizmi?");
    if (confirmation) {
      pro.isActive = true;
      let { _id, __v, ...activePro } = pro;
      axios
        .put(`/products/${pro._id}`, activePro)
        .then((res) => {
          if (res?.data?.state) {
            setLoad(true);
          }
        })
        .catch((res) => console.log(res));
    }
  };

  return (
    <div className={path ? "products adminPro" : "products"}>
      {!path && <h1 className="caption">E'lonlar</h1>}
      {!products.length ? (
        <Loader />
      ) : (
        <div className="products_list">
          {products?.reverse()?.map((product, index) => (
            <div key={index} className="list_item">
              <img src={product.images[0]} alt="" />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <Link to={`/edu/${product._id}`}> Batafsil </Link>
              {control && (
                <button onClick={() => activedProduct(product)}>
                  Aktiv qilish
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
