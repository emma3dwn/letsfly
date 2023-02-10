require('dotenv').config()

module.exports = {
  images: {
    //unoptimized: false,
    //formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: process.env.HOST,
        pathname: "/**",
      },
    ],
  },
};



