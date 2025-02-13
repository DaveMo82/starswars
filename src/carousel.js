import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./carousel.css";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Carousel() {
    return (
        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
            nextEl:".custom-swiper-button-next",
            prevEl:".custom-swiper-button-prev"
        }}
        pagination={{clickable: true}}
        autoplay={{ delay: 2000, disableOnInteraction: false}}
        style={{ width: "85%", height: "700px" }}
        >
            <SwiperSlide><img src="slide1.jpeg" alt="Slide1" /></SwiperSlide>
            <SwiperSlide><img src="slide2.jpeg" alt="Slide2" /></SwiperSlide>

            <div className="custom-swiper-button-prev">❮</div>
    <div className="custom-swiper-button-next">❯</div>
        </Swiper>
    )
}