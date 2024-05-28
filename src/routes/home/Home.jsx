import React from "react";
import Banner from "../../components/banner/Banner";
import Products from "../../components/products/Products";
import Footer from "../../components/footer/Footer";
import BannerCarousel from "../../components/bannerCarousel/BannerCarousel";

function Home() {
  return (
    <div className="home">
      <BannerCarousel />
      <Banner />
      <Products />
      <Footer />
    </div>
  );
}

export default Home;
