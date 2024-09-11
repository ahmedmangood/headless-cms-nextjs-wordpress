/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: process.env.WORDPRESS_HOSTNAME,
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "2.gravatar.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "1.gravatar.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "10003",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
