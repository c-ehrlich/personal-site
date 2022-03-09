/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // flag for enable Styled Components in the Rust compiler
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
