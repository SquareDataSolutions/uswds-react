const path = require('path');

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /.(ts|tsx)$/,
    include: path.resolve(__dirname, '../src'),
    loader: require.resolve('babel-loader'),
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
