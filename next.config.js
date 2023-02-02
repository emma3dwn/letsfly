// @type {import('next').NextConfig}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "http",

        hostname: "localhost",
        port: "10009",
        pathname: "/**",
      },
    ],
  },
};

/*module.exports = {
  assetPrefix: 'http://localhost:10004/wp-admin/',
}*/
