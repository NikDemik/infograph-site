'use client';

import Image from 'next/image';
import ContactFormModal from '../modals/ContactFormModal';
import ContactManager from '../modals/ContactManager';

const cases = [
    {
        id: 'min',
        case: 'Кейс#1',
        title: 'Минимум',
        color: '#bdc2fb',
        items: [
            { src: '/products/slide-1.png', title: 'prod1-1' },
            { src: '/products/slide-2.png', title: 'prod1-2' },
            { src: '/products/slide-3.png', title: 'prod1-3' },
            { src: '/products/slide-4.png', title: 'prod1-4' },
            { src: '/products/slide-5.png', title: 'prod1-5' },
        ],
    },
    {
        id: 'standart',
        case: 'Кейс#2',
        title: 'Стандарт',
        color: '#fcc105',
        items: [
            { src: '/products/prod2-1.png', title: 'prod2-1' },
            { src: '/products/prod2-2.png', title: 'prod2-2' },
            { src: '/products/prod2-3.png', title: 'prod2-3' },
            { src: '/products/prod2-4.png', title: 'prod2-4' },
            { src: '/products/prod2-5.png', title: 'prod2-5' },
        ],
    },
    {
        id: 'max',
        case: 'Кейс#3',
        title: 'Максимум',
        color: '#694fd7',
        items: [
            { src: '/products/prod3-1.png', title: 'prod3-1' },
            { src: '/products/prod3-2.png', title: 'prod3-2' },
            { src: '/products/prod3-3.png', title: 'prod3-3' },
            { src: '/products/prod3-4.png', title: 'prod3-4' },
            { src: '/products/prod3-5.png', title: 'prod3-5' },
        ],
    },
];

interface CaseProps {
    caseId: string;
}

export default function Case({ caseId }: CaseProps) {
    // Находим нужный case по переданному id
    const targetCase = cases.find((c) => c.id === caseId);

    // Проверяем, что case найден
    if (!targetCase) {
        return <div>Кейс не найден</div>;
    }

    return (
        <section className=" relative z-0 mb-[5.5vw]">
            <h2>
                {targetCase?.case}
                <span style={{ color: targetCase?.color }}> (Тариф "{targetCase?.title}")</span>
            </h2>
            <div className=" flex flex-col gap-5">
                <div className="flex justify-between ">
                    <p className=" mt-5 hidden md:block">
                        Подборка реализованных проектов, демонстрирующая
                        <br />
                        подход к визуализации товаров и качество исполнения.
                    </p>
                </div>

                {/* Карточки*/}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-7.5">
                    {targetCase?.items.map((product) => (
                        <div key={product.title} className="relative aspect-230/305">
                            <Image
                                src={product.src}
                                fill // Заполняет родительский контейнер
                                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 16.666vw"
                                alt={product.title}
                                className="object-cover rounded-lg"
                            />
                        </div>
                    ))}
                </div>

                {/* Кнопка*/}
                {/* <Button variant="default" size="default" asChild>
                    <Link href="#">заказать карточку товара</Link>
                </Button> */}
                <ContactManager />
            </div>
        </section>
    );
}
