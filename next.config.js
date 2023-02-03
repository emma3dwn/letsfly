


@type {import('next').NextConfig}

module.exports = {
  images: {
    //unoptimized: false,
    //formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "172.16.1.67",
        pathname: "/**",
      },
    ],
  },
};



