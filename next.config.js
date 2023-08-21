/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
            },
        ],
    },
    webpack(config) {
        config.plugins.push(
            require('unplugin-icons/webpack')({
                compiler: 'jsx',
                jsx: 'react'
            })
        )
        return config
    },
}

module.exports = nextConfig
