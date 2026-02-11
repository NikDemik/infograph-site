'use client';

import newsletterConsent from '@/data/newsletter-consent.json';

// Определяем типы
type ContentBlock = {
    type: 'paragraph' | 'subtitle' | 'list';
    text?: string;
    items?: string[];
};

type NewsletterConsent = {
    meta: {
        title: string;
        organization: string;
        inn: string;
        ogrn: string;
        address: string;
        email: string;
        phone: string;
    };
    content: ContentBlock[];
};

export default function NewsletterConsent() {
    const data = newsletterConsent as any;
    return (
        <div className="relative z-10 mt-14 md:mt-32">
            {/* Header */}
            <div className="mb-12">
                <h2 className=" uppercase">{newsletterConsent.meta.title}</h2>
                <h2 className="text-[#bdc2fb] ">{newsletterConsent.meta.desc}</h2>
            </div>

            <div className="space-y-4 leading-relaxed">
                {data.content?.map((block: any, index: number) => {
                // Безопасная проверка наличия свойств
                    if (block?.type === 'paragraph') {
                        return <p key={index}>{block.text}</p>;
                    }
                    
                    if (block?.type === 'subtitle') {
                        return (
                        <h3 key={index} className="font-medium text-gray-900 dark:text-white mt-2">
                            {block.text}
                        </h3>
                        );
                    }
                    
                    if (block?.type === 'list' && Array.isArray(block.items)) {
                        return (
                        <ul key={index} className="list-disc pl-5 space-y-1">
                            {block.items.map((item: string, i: number) => (
                            <li key={i}>{item}</li>
                            ))}
                        </ul>
                        );
                    }
                    
                    return null;
                })}
            </div>
        </div>
    );
}
