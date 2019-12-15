const scss = require('rollup-plugin-scss').scss;

module.exports = {
  rollup(config) {
    config.plugins.push(
      scss({
        output: 'dist/styles.css',
      }),
    );
    return config;
  },
};
