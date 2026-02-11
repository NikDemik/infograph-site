'use client';

import newsletterConsent from '@/data/newsletter-consent.json';

export default function NewsletterConsent() {
    return (
        <div className="relative z-10 mt-14 md:mt-32">
            {/* Header */}
            <div className="mb-12">
                <h2 className=" uppercase">{newsletterConsent.meta.title}</h2>
                <h2 className="text-[#bdc2fb] ">{newsletterConsent.meta.desc}</h2>
            </div>

            <div className="space-y-4 leading-relaxed">
                {newsletterConsent.content.map((block, index) => {
                    switch (block.type) {
                        case 'paragraph':
                            return <p key={index}>{block.text}</p>;
                        case 'subtitle':
                            return (
                                <p key={index} className="mt-2">
                                    {block.text}
                                </p>
                            );
                        case 'list':
                            return (
                                <ul key={index} className="list-disc pl-5 space-y-1">
                                    {block.items.map((item, i) => (
                                        <li key={i}>
                                            <p>{item}</p>
                                        </li>
                                    ))}
                                </ul>
                            );
                        default:
                            return null;
                    }
                })}
            </div>
        </div>
    );
}
