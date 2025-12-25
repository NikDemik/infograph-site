import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './SwiperCustom.css'; // Для кастомных стилей

interface Slide {
    id: number;
    image: string;
    alt?: string;
}

interface MySwiperProps {
    slides?: Slide[];
}

const SwiperDemo = ({ slides = defaultSlides }: MySwiperProps) => {
    return (
        <div className="relative w-full">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={16}
                slidesPerView={4.5}
                centeredSlides={true}
                loop={true}
                initialSlide={2} // Начинаем с центрального слайда
                navigation={{
                    prevEl: '.custom-prev',
                    nextEl: '.custom-next',
                }}
                pagination={{
                    clickable: true,
                    el: '.custom-pagination',
                }}
                breakpoints={{
                    320: { slidesPerView: 1.2 },
                    640: { slidesPerView: 2.5 },
                    1024: { slidesPerView: 5 },
                }}
                className="mySwiper"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
                            <img
                                src={slide.image}
                                alt={slide.alt || `Slide ${slide.id}`}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Кастомные кнопки навигации */}
            <button className="custom-prev absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </button>
            <button className="custom-next absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button>

            {/* Кастомная пагинация */}
            <div className="custom-pagination flex justify-center gap-2 mt-6" />
        </div>
    );
};

// Дефолтные слайды для демонстрации
const defaultSlides: Slide[] = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    image: `https://picsum.photos/seed/${i + 1}/800/600`,
    alt: `Изображение ${i + 1}`,
}));

export default SwiperDemo;
