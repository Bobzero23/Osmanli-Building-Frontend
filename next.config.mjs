/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "osmanlibuildingbobzero.s3.us-east-1.amazonaws.com",
        port: "",
        pathname: "/**", // This allows all paths under the hostname
      },
    ],
  },
};

export default nextConfig;
