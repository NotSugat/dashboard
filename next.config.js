/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotepatterns: [
      {
        protocol: "https",
        hostname: "phoneaqua.com",
      },
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

module.exports = nextConfig;
