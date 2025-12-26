import { Button } from '../ui/button';
import Image from 'next/image';

export default function ButtonHome() {
    return (
        <section className="relative w-full mt-10 overflow-hidden">
            <div className="flex flex-col gap-5 px-6">
                <Button size="home" variant="home">
                    Заказать инфографику под ключ
                </Button>

                <div className="flex items-center justify-center">
                    <p className=" text-center">
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
