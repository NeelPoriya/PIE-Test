/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.piemultilingual.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.*.*',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
