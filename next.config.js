/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // flag for enable Styled Components in the Rust compiler
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
