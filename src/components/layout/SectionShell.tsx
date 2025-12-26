import Image from 'next/image';

export function SectionShell({ children }: { children: React.ReactNode }) {
    return (
        <section className="relative overflow-visible">
            {/* ФОНОВЫЕ ОБЪЕКТЫ */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                {/* Объект 1 — синяя звезда */}
                <Image
                    src="/img/blue-star.png"
                    width={566}
                    height={566}
                    alt="Картинка фона синяя звезда"
                    className="
                        hidden 
                        md:block
                        absolute
                        top-[40vh]
                        -right-[max(16px,calc((100vw-1530px)/2-60px))]
                        w-[clamp(260px,28vw,420px)]
                        h-auto
                    "
                />

                {/* Объект 2 — второй элемент выше */}
                <Image
                    src="/img/yellow-star.png"
                    width={555}
                    height={555}
                    alt="Картинка фона желтая звезда"
                    className="
                        hidden 
                        md:block
                        absolute
                        top-[260vh]
                        -left-[max(16px,calc((100vw-1530px)/2-60px))]
                        w-[clamp(260px,28vw,420px)]
                        h-auto
                    "
                />
            </div>

            {/* КОНТЕНТ */}
            <div className="relative z-10">{children}</div>
        </section>
    );
}
