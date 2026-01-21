import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,

    // output: 'export',
    // trailingSlash: true,
    // images: {
    //     unoptimized: true,
    // },

    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://infograph-site.vercel.app/api/:path*',
            },
        ];
    },
};

export default nextConfig;
