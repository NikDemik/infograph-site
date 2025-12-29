export default function Plans() {
    const columns = [
        { key: 'min', label: 'Минимум' },
        { key: 'standard', label: 'Стандарт' },
        { key: 'max', label: 'Максимум' },
    ];

    const rows = [
        {
            label: 'Инфографика',
            min: 'Базовая (до 3)',
            standard: 'Расширенная (до 6)',
            max: 'Индивидуальная (до 10)',
        },
        {
            label: 'Обработка фото',
            min: 'Лёгкая',
            standard: 'Расширенная',
            max: 'Профессиональная',
        },
        {
            label: 'Концепция',
            min: 'Стандартная',
            standard: 'Улучшенная',
            max: 'Индивидуальная',
        },
        {
            label: 'Доп.материалы',
            min: 'Нет',
            standard: 'Схемы и тех.блоки',
            max: 'Полный контент-пакет',
        },
        {
            label: 'Скорость и приоритет',
            min: 'Обычная',
            standard: 'Стандарт',
            max: 'Приоритет',
        },
    ];
    return (
        <section className=" relative z-10 mt-[8.5vw] hidden md:block ">
            <h2>Сравнение тарифов</h2>
            <div className=" mt-10 w-full rounded-3xl shadow-main bg-background overflow-hidden">
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="w-[28%] border-b border-r border-border px-6 py-5 text-center text-muted-foreground">
                                {/* пустая ячейка */}
                            </th>

                            {columns.map((col) => (
                                <th
                                    key={col.key}
                                    className="border-b border-r border-border px-4 py-5 last:border-r-0"
                                >
                                    <p className="text-center font-normal text-foreground">
                                        {col.label}
                                    </p>
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {rows.map((row, i) => (
                            <tr key={row.label}>
                                <td className="border-b border-r border-border px-6 py-5">
                                    <p className="text-center font-normal text-foreground">
                                        {row.label}
                                    </p>
                                </td>

                                {columns.map((col) => (
                                    <td
                                        key={col.key}
                                        className="border-b border-r border-border px-6 py-5 last:border-r-0"
                                    >
                                        <p className="text-center text-foreground">
                                            {row[col.key as keyof typeof row]}
                                        </p>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
