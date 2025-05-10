"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Landing = () => {
  return (
    <section className="w-full max-w-6xl mx-auto py-6 px-2" id="carousel">
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="mySwiper"
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true}
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={30}
      >
        <SwiperSlide>
          <img
            alt="Nature"
            className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg"
            src="https://images.prismic.io/bakertilly/ZxAvs4F3NbkBXmmQ_Artificialintelligenceinpalmofmanshand.jpg?auto=format%2Ccompress&rect=0%2C69%2C1920%2C1008&w=1200&h=630"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="City Sunset"
            className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg"
            src="https://psiborg.in/wp-content/uploads/2024/01/IOT-AI-ML-com.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="Mountains"
            className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg"
            src="https://blog-frontend.envato.com/cdn-cgi/image/width=1200,quality=75,format=auto,fit=crop,height=630/uploads/sites/2/2023/02/Tuts_Roundup__Top_Graphic_Design_Courses.jpeg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="Beach"
            className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg"
            src="https://www.sgstechnologies.net/sites/default/files/2021-08/future-webdesign.jpg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            alt="Road Trip"
            className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg"
            src="https://miro.medium.com/v2/resize:fit:1400/1*szBsfY6lp8A0jb1zOvJ0mw.jpeg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            alt="Road Trip"
            className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg"
            src="https://waterflame.in/other/hardwarenetworking.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Landing;
