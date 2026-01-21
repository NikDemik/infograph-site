export const API_CONFIG = {
    contact: process.env.NEXT_PUBLIC_API_URL
        ? process.env.NEXT_PUBLIC_API_URL
        : 'https://infograph-site.vercel.app/api/contact',
} as const;
