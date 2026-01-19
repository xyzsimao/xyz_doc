import { createMDX } from 'xyzdoc-mdx/next';
/** @type {import('next').NextConfig} */
const config = {
    reactStrictMode: true,
};
const withMDX = createMDX({
    // customise the config file path
    images: {
        domains: ['b3log.org'],
        loader: 'default',
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'b3log.org', // Only allow images from this domain
                port: '',
                pathname: '/**', // Allow any path under this domain
            },
        ],
        // Optionally, use a custom loader for all images
        // loader: 'custom',
        // loaderFile: './my/image/loader.js',
    },
    configPath: "source.config.ts"
});
export default withMDX(config);