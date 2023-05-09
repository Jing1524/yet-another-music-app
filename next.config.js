/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   domains: ['is5-ssl.mzstatic.com'],
  // },
}

module.exports = nextConfig

module.exports = {
  env: {
    SHAZAM_CORE_API_KEY: process.env.SHAZAM_CORE_RAPID_API_KEY,
    GEO_API_KEY: process.env.GEO_API_KEY,
  },
}
