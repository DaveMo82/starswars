import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from "swiper/modules";

export default function Carousel() {
    return (
        <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{clickable: true}}
        >
            <SwiperSlide><img src="slide1.jpeg" alt="Slide1" /></SwiperSlide>
            <SwiperSlide><img src="slide2.jpeg" alt="Slide2" /></SwiperSlide>
        </Swiper>
    )
}