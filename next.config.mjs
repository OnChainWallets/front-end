/** @type {import('next').NextConfig} */
const nextConfig = {
    appDir: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'github.com',
                port: '',
            }
        ]
    }
};

export default nextConfig;