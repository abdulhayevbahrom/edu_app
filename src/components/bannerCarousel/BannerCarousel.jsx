import React from "react";
import "./BannerCarousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./BannerCarousel.css";

import { Autoplay, Navigation } from "swiper/modules";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

import najottalim from "../../assets/najottalim.jpeg";
import lsl from "../../assets/lsl.jpeg";
import everest from "../../assets/everest.jpeg";

function BannerCarousel() {
  let carouselData = [najottalim, lsl, everest];

  return (
    <Swiper
      navigation={true}
      modules={[Navigation, Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="mySwiper"
    >
      {carouselData?.map((item, index) => (
        <SwiperSlide className="swiperSlide" key={index}>
          <img className="banner_carousel_img" src={item} alt="name" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default BannerCarousel;
