'use client';

import policyData from '@/data/privacy-policy.json';

export default function PrivacyPolicy() {
    return (
        <div className="relative z-10 mt-14 md:mt-32">
            {/* Header */}
            <div className="mb-12">
                <h2 className=" uppercase">{policyData.meta.title}</h2>
                <h2 className="text-[#bdc2fb] ">(об обработке и защите персональных данных)</h2>
                {/* <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <span>Организация: {policyData.meta.organization}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>
                        Обновлено:{' '}
                        {new Date(policyData.meta.updated_at).toLocaleDateString('ru-RU')}
                    </span>
                </div> */}
            </div>

            {/* Sections */}
            <div className="space-y-12">
                {policyData.sections.map((section, index) => (
                    <Section key={index} section={section} />
                ))}
            </div>

            {/* Footer */}
            {/* <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    © {new Date().getFullYear()} {policyData.meta.organization}. Все права защищены.
                </p>
            </div> */}
        </div>
    );
}

function Section({ section }: { section: any }) {
    return (
        <section className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-800">
                <span className="dark:text-active-light mr-3">{section.number}.</span>
                {section.title}
            </h2>

            {/* Секция 7 - Реквизиты */}
            {section.type === 'contacts' && (
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-3xl p-6 md:p-8">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        {section.details.name}
                    </h3>
                    <dl className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                            <dt className="text-gray-600 dark:text-gray-400 mb-1">ОГРН</dt>
                            <dd className="font-medium text-gray-900 dark:text-white">
                                {section.details.ogrn}
                            </dd>
                        </div>
                        <div>
                            <dt className="text-gray-600 dark:text-gray-400 mb-1">ИНН</dt>
                            <dd className="font-medium text-gray-900 dark:text-white">
                                {section.details.inn}
                            </dd>
                        </div>
                        <div className="md:col-span-2">
                            <dt className="text-gray-600 dark:text-gray-400 mb-1">Адрес</dt>
                            <dd className="font-medium text-gray-900 dark:text-white">
                                {section.details.address}
                            </dd>
                        </div>
                        <div>
                            <dt className="text-gray-600 dark:text-gray-400 mb-1">Email</dt>
                            <dd>
                                <a
                                    href={`mailto:${section.details.email}`}
                                    className="text-active dark:text-active-light hover:underline font-medium"
                                >
                                    {section.details.email}
                                </a>
                            </dd>
                        </div>
                    </dl>
                </div>
            )}

            {/* Секция 2 - Термины */}
            {section.terms && (
                <div className="space-y-6">
                    {section.terms.map((term: any, idx: number) => (
                        <div key={idx} className="bg-gray-50 dark:bg-gray-900 rounded-lg p-5">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                {term.term}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-3">
                                {term.definition}
                            </p>
                            {term.list && (
                                <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                                    {term.list.map((item: string, i: number) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* Обычные пункты секции */}
            {section.items && !section.terms && (
                <div className="space-y-6">
                    {section.items.map((item: any, idx: number) => (
                        <div key={idx} className="space-y-3">
                            {item.number && (
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                    {item.number}
                                </h3>
                            )}

                            {item.title && !item.number && (
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white mt-4 mb-2">
                                    {item.title}
                                </h3>
                            )}

                            {item.text && (
                                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                                    {item.text}
                                </p>
                            )}

                            {item.list && (
                                <ul className="list-disc pl-5 space-y-1.5 text-gray-700 dark:text-gray-300">
                                    {item.list.map((li: string, i: number) => (
                                        <li key={i}>{li}</li>
                                    ))}
                                </ul>
                            )}

                            {item.after_text && (
                                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed mt-2">
                                    {item.after_text}
                                </p>
                            )}

                            {item.subitems && (
                                <div className="ml-4 space-y-4 mt-3 border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                                    {item.subitems.map((subitem: any, i: number) => (
                                        <div key={i}>
                                            <h4 className="text-base font-medium text-gray-900 dark:text-white">
                                                {subitem.number}
                                            </h4>
                                            <p className="text-gray-700 dark:text-gray-300">
                                                {subitem.text}
                                            </p>
                                            {subitem.list && (
                                                <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
                                                    {subitem.list.map((li: string, j: number) => (
                                                        <li key={j}>{li}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
