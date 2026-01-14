import Image from 'next/image';

export default function HeroBanner() {
    return (
        <section className=" w-full hidden md:block mt-12 overflow-hidden">
            <div className="relative z-10">
                <Image src="/img/banner.png" width={1530} height={671} alt="Баннер" />
                <div className="absolute top-[56%] left-[50%]">
                    <h1 className=" text-[2.5vw] font-bold leading-none">
                        Выйди в ТОП
                        <br /> — подай заявку уже сегодня
                    </h1>
                </div>
            </div>
        </section>
    );
}
