/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // {
      //   source: '/',
      //   destination: '/home',
      //   permanent: true,
      // },
      // More redirects can be added here
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd1x2tneac0i3nn.cloudfront.net',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'd2vsjtdgssmjnu.cloudfront.net',
        pathname: '**',
      },
      {
        protocol: 'http',
        hostname: '*',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: '*',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
