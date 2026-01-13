'use client'

import ContactFormModal from '../modals/ContactFormModal';
import { Button } from '../ui/button';
import { useState } from 'react';

export default function ButtonHome() {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <section className="relative w-full mt-10 overflow-hidden">
            <div className="flex flex-col gap-5 px-6">
                <Button size="home" variant="home" onClick={() => setIsContactOpen(true)}>
                    Заказать инфографику под ключ
                </Button>

                {/* Модальное окно контактов */}
                <ContactFormModal
                    isOpen={isContactOpen} 
                    onClose={() => setIsContactOpen(false)} 
                />

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
