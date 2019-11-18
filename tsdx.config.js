import scss from 'rollup-plugin-scss';

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
