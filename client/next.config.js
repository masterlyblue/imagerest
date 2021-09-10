const path = require('path');

module.exports = {
  reactStrictMode: false,

  // 절대 경로
  webpack(config, options) {
    config.resolve.modules.push(path.resolve('./'))
    return config;
  }
}
