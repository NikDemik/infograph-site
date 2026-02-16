import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

const slides = [
    { img: 'Наши работы инфографики карточка 1', src: '/products/card-product-1.png' },
    { img: 'Наши работы инфографики карточка 2', src: '/products/card-product-2.png' },
    { img: 'Наши работы инфографики карточка 3', src: '/products/card-product-3.png' },
    { img: 'Наши работы инфографики карточка 4', src: '/products/card-product-4.png' },
    { img: 'Наши работы инфографики карточка 5', src: '/products/card-product-5.png' },
    { img: 'Наши работы инфографики карточка 6', src: '/products/card-product-6.png' },
    { img: 'Наши работы инфографики карточка 7', src: '/products/card-product-7.png' },
    { img: 'Наши работы инфографики карточка 8', src: '/products/card-product-8.png' },
];

export default function MySwiper() {
    return (
        <>
            <Swiper
                // install Swiper modules
                modules={[Autoplay, Navigation]}
                spaceBetween={30}
                slidesPerView={1.5}
                initialSlide={1}
                navigation={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    480: { slidesPerView: 1.2 },
                    620: { slidesPerView: 2.5 },
                    768: { slidesPerView: 3.5 },
                    1280: { slidesPerView: 4 },
                }}
            >
                {slides.map((slide, img) => (
                    <SwiperSlide>
                        <Image src={slide.src} width={324} height={431} alt={slide.img} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
