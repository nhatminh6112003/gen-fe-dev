/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/media/:path*',
        destination: '/en/blog/:path*',
        permanent: true
      },
      {
        source: '/our-team/:path*',
        destination: '/en/about-us/:path*',
        permanent: true
      },
      {
        source: '/how-to-get-the-genomescreen-test/:path*',
        destination: '/en/how-it-works/:path*',
        permanent: true
      },
      {
        source: '/contact-us/:path*',
        destination: '/en/contact-us/:path*',
        permanent: true
      },
      {
        source: '/reach-our-team/:path*',
        destination: '/en/contact-us/:path*',
        permanent: true
      },
      {
        source: '/de/media/:path*',
        destination: '/de/blog/:path*',
        permanent: true
      },
      {
        source: '/de/our-team/:path*',
        destination: '/de/about-us/:path*',
        permanent: true
      },
      {
        source: '/de/how-to-get-the-genomescreen-test/:path*',
        destination: '/de/how-it-works/:path*',
        permanent: true
      },
      {
        source: '/de/contact-us/:path*',
        destination: '/de/contact-us/:path*',
        permanent: true
      },
      {
        source: '/de/reach-our-team/:path*',
        destination: '/de/contact-us/:path*',
        permanent: true
      }
    ];
  },
  swcMinify: true,
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  experimental: {
    serverActions: true
  },
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_IMAGE_DOMAIN: process.env.NEXT_PUBLIC_IMAGE_DOMAIN,
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    AWS_SES_REGION: process.env.AWS_SES_REGION,
    AWS_SES_SENDER: process.env.AWS_SES_SENDER,
    AWS_SES_RECEIVER: process.env.AWS_SES_RECEIVER,
    MAPBOX_TOKEN: process.env.MAPBOX_TOKEN,
    FB_API_KEY: process.env.FB_API_KEY,
    FB_AUTH_DOMAIN: process.env.FB_AUTH_DOMAIN,
    FB_PROJECT_ID: process.env.FB_PROJECT_ID,
    FB_STORAGE_BUCKET: process.env.FB_STORAGE_BUCKET,
    FB_MESSAGING_SENDER_ID: process.env.FB_MESSAGING_SENDER_ID,
    FB_APP_ID: process.env.FB_APP_ID,
    FB_MEASUREMENT_ID: process.env.FB_MEASUREMENT_ID
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gen-dev.bytez.pro'
      },
      {
        protocol: 'https',
        hostname: 'strapi-upload-images-bucket.s3.ap-southeast-2.amazonaws.com'
      }
    ],
    domains: [
      'https://gen-dev.bytez.pro',
      'strapi-upload-images-bucket.s3.ap-southeast-2.amazonaws.com'
    ]
  }
};

const { config } = require('./config/index');
const withPWA = require('next-pwa')({
  dest: 'public'
});

const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: true
});

module.exports =
  process.env.MODE === 'DEV'
    ? nextConfig
    : withPlugins([[withBundleAnalyzer], [withPWA]], nextConfig);
