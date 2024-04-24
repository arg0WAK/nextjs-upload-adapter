/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  env: { CRON_SECRET: process.env.CRON_SECRET },
};

export default nextConfig;
