import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import BannerCard from "./BannerCard";

const Banner =({banners})=>{
    return(
         <div className="py-2 px-1">
          <Swiper
    modules={[Pagination, Autoplay]}
    spaceBetween={20}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 3500, disableOnInteraction: false }}
    loop
    breakpoints={{
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
    className=""
  >
    {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <BannerCard image={banner} />
          </SwiperSlide>
        ))}
  </Swiper>
         </div>
    )
}

export default Banner;
