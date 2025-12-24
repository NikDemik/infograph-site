import { Button } from '../ui/button';
import Image from 'next/image';

export default function ButtonHome() {
    return (
        <section className="relative w-full mt-10 overflow-visible">
            {/* ФОН */}
            <div className="absolute inset-0 -z-10 hidden md:block pointer-events-none">
                <Image
                    src="/img/blue-star.png"
                    width={566}
                    height={566}
                    alt=""
                    className="
                        absolute
                        -bottom-6
                        right-[calc((100vw-1530px)/2-340px)]
                        w-[clamp(260px,28vw,420px)]
                        h-auto
                    "
                />
            </div>

            {/* КОНТЕНТ */}
            <div className="relative z-10 max-w-[1530px] mx-auto flex flex-col gap-5 px-6">
                <Button size="home" variant="home">
                    Заказать инфографику под ключ
                </Button>

                <div className="flex items-center justify-center">
                    <p className="text-[1.125rem] md:text-xl text-gray text-center">
                        Карточки, которые продают, а не просто <br className="md:hidden" />
                        показывают.
                        <br />
                        <span className="hidden md:block">
                            Ваш товар. Наша визуальная эффективность
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
}
