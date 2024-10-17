/** @type {import('next').NextConfig} */

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.externals = [...config.externals, 'undici'];
    }
    return config;
  },
};
