import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

export default function MySwiper() {
    return (
        <>
            <Swiper
                // install Swiper modules
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={4}
                initialSlide={1.5}
                navigation={true}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide>
                    <Image
                        src="/slider/slide-1.png"
                        width={230}
                        height={306}
                        alt="Наши работы слайд 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/slider/slide-2.png"
                        width={230}
                        height={306}
                        alt="Наши работы слайд 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/slider/slide-3.png"
                        width={230}
                        height={306}
                        alt="Наши работы слайд 3"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/slider/slide-4.png"
                        width={230}
                        height={306}
                        alt="Наши работы слайд 4"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/slider/slide-5.png"
                        width={230}
                        height={306}
                        alt="Наши работы слайд 5"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
