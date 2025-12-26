import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

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
                <SwiperSlide>
                    <Image
                        src="/slider/slide-1.png"
                        width={324}
                        height={431}
                        alt="Наши работы слайд 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/slider/slide-2.png"
                        width={324}
                        height={431}
                        alt="Наши работы слайд 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/slider/slide-3.png"
                        width={324}
                        height={431}
                        alt="Наши работы слайд 3"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/slider/slide-4.png"
                        width={324}
                        height={431}
                        alt="Наши работы слайд 4"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/slider/slide-5.png"
                        width={324}
                        height={431}
                        alt="Наши работы слайд 5"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
