import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,

    // output: 'export',
    // trailingSlash: true,
    // images: {
    //     unoptimized: true,
    // },

    experimental: {
        globalNotFound: true,
    },
};

export default nextConfig;
