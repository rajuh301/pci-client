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
            alt="Online Learning Concept"
            className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="Students Learning Together"
            className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg"
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="E-learning Setup"
            className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg"
            src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="Digital Classroom"
            className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg"
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="Student Success"
            className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg"
            src="https://images.unsplash.com/photo-1551836026-d5c0889dd6d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="Asian Students Learning"
            className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg"
            src="https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Landing;