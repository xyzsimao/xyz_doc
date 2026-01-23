import { createMDX } from 'xyzdoc-mdx/next';
import type { NextConfig } from 'next';

/** @type {import('next').NextConfig} */
const config: NextConfig = {
    reactStrictMode: true,
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
    serverExternalPackages: [
        'ts-morph',
        'typescript',
        'oxc-transform',
        'twoslash',
        'shiki',
        '@takumi-rs/image-response',
    ],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'b3log.org', // Only allow images from this domain
                port: '',
                pathname: '/**', // Allow any path under this domain
            },
            {
                protocol: 'https',
                hostname: 'github.com',
                port: '',
                pathname: '**',
                search: '',
            },
        ],
    },
    async rewrites() {
        return [
            {
                source: '/docs/:path*.mdx',
                destination: '/llms.mdx/:path*',
            },
            {
                source: '/docs.mdx',
                destination: '/llms.mdx',
            },
        ];
    },
};

const withMDX = createMDX({
    // async rewrites() {
    //     return [
    //         {
    //             source: '/docs/:path*.mdx',
    //             destination: '/llms.mdx/docs/:path*',
    //         },
    //     ];
    // },
    // customise the config file path
    // images: {
    //     domains: ['b3log.org', '.github.com'],
    //     loader: 'default',
    //     remotePatterns: [
    //         {
    //             protocol: 'https',
    //             hostname: 'b3log.org', // Only allow images from this domain
    //             port: '',
    //             pathname: '/**', // Allow any path under this domain
    //         },
    //         {
    //             protocol: 'https',
    //             hostname: 'github.com',
    //             port: '',
    //             pathname: '**',
    //             search: '',
    //         },

    //     ],
    //     // Optionally, use a custom loader for all images
    //     // loader: 'custom',
    //     // loaderFile: './my/image/loader.js',
    // },
    configPath: "source.config.ts"
});
export default withMDX(config);