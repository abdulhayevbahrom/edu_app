import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="banner">
      <h1>Biznesingizni biz bilan reklama qiling</h1>
      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio incidunt
        rem dignissimos obcaecati illum error maiores accusamus animi ut
        molestiae? Nisi, voluptas iure. Inventore, quidem a. Reprehenderit,
        magnam. Ab, explicabo!
      </p> */}
      <Link to="/register">Royxatdan o'tish</Link>
    </div>
  );
}

export default Banner;
