/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const commonConfig = {
  reactStrictMode: true,
};

const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      commonConfig,
      env: {
        mongodb_username: 'maryam',
        mongodb_password: 'pzTChnPR2HEfeCD2',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-blog-dev',
      },
    };
  }

  return {
    env: {
      commonConfig,
      mongodb_username: 'maryam',
      mongodb_password: 'pzTChnPR2HEfeCD2',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'my-blog',
    },
  };
};

module.exports = nextConfig;
