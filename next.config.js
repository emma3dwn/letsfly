// @type {import('next').NextConfig}

/*module.exports = {
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
*/

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

/*module.exports = {
  assetPrefix: 'http://localhost:10004/wp-admin/',
}*/
