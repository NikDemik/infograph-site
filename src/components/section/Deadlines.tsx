import Image from 'next/image';

export default function Deadlines() {
    return (
        <section className="relative z-10 mt-[8.5vw] py-16 md:py-25.5 md:pl-64">
            {/* Фон, который выходит за пределы контейнера */}
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen bg-gray-light -z-10 rounded-b-3xl md:rounded-b-none" />

            {/* Картинка рядом с текстом десктоп */}
            <div className=" absolute -top-25 -left-50 hidden md:block">
                <Image src="/img/lightning.png" width={501} height={501} alt="Молния" />
            </div>

            {/* Картинка рядом с текстом мобильная */}
            <div className=" absolute top-47.5 right-0 md:hidden">
                <Image src="/img/lightning.png" width={301} height={301} alt="Молния" />
            </div>

            <h2>Сроки</h2>
            <div className=" flex flex-col gap-5">
                <p className=" mt-5">
                    Сроки зависят от объёма и тарифа, полноценная инфографика делается за 2–4
                    рабочих дня. Сложные проекты согласуем заранее. Есть ускоренный режим. Мы сдаём
                    материалы строго в срок и полностью готовыми к загрузке.
                </p>
            </div>
        </section>
    );
}
