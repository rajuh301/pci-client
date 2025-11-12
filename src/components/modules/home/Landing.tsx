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
            src="https://www.shutterstock.com/shutterstock/videos/1097293349/thumb/1.jpg?ip=x480"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="Students Learning Together"
            className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg"
            src="https://s7d1.scene7.com/is/image/wbcollab/online-edu1?qlt=90&fmt=webp&resMode=sharp2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="E-learning Setup"
            className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg"
            src="https://www.unicef.org/rosa/sites/unicef.org.rosa/files/styles/media_large_image/public/UNI353140.jpg.webp?itok=sqmfHato"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="Digital Classroom"
            className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg"
            src="https://www.unicef.org/rosa/sites/unicef.org.rosa/files/styles/press_release_feature/public/UNI353142.jpeg.webp?itok=yKsNwVTc"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="Student Success"
            className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg"
            src="https://www-file.huawei.com/admin/asset/v1/pro/view/d6d82cc0543e47a5aebeef96296e596b.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="Asian Students Learning"
            className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg"
            src="https://d2u0ktu8omkpf6.cloudfront.net/ef5212c51a6017b01014677f2fa01bc1d15a8f59dc068ff8.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Landing;