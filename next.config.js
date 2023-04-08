/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    CONTENTFUL_SPACE_ID: "3chdw4b7k4n9",
    CONTENTFUL_ACCESS_KEY: "p5CexHxDhJ_xX49dW53qOdLtUhrYLgQRi_AxBtAEXv8",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
