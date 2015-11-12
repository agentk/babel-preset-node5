/* global module */
const presets = [
  './core',
  'babel-preset-react',
];

module.exports = {
  presets: presets.map(function requireModule(name) {
    return require(name);
  }),
};
