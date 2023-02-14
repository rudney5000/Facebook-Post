/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'upload.wikimedia.org',
      'mmodnaya.ru',
      'fb.ru',
      'salonfifi.ru',
      'lisa.ru',
      'vsegda-pomnim.com',
    ],
  },
}

module.exports = nextConfig
