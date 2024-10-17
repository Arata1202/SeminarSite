/** @type {import('next').NextConfig} */

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    });
    return config;
  },
};
