/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // flag for enable Styled Components in the Rust compiler
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
