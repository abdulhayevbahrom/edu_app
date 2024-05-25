import React from "react";
import Banner from "../../components/banner/Banner";
import Products from "../../components/products/Products";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <div className="home">
      <Banner />
      <Products />
      <Footer />
    </div>
  );
}

export default Home;
