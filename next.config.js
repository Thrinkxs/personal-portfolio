/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  reactServerComponents: {
    use: ["@react-email/tailwind"],
  },
};

module.exports = nextConfig;
