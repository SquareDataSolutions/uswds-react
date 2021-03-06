/* eslint-disable */
const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        ie: 11,
      },
    },
  ],
  '@babel/preset-react',
  '@babel/preset-typescript',
];

const plugins = [
  [
    '@babel/plugin-transform-typescript',
    {
      isTSX: true,
    },
  ],
  '@babel/plugin-proposal-class-properties',
];

module.exports = { presets, plugins };
