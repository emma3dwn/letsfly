require("dotenv").config();

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: process.env.HOST,
        pathname: "/**",
      },
    ],
  },
};
