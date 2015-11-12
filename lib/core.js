/* global module */
const plugins = [
  'babel-plugin-transform-es2015-destructuring',
  'babel-plugin-transform-es2015-modules-commonjs',
  'babel-plugin-transform-es2015-parameters',
  'babel-plugin-transform-es2015-sticky-regex',
  'babel-plugin-transform-es2015-unicode-regex',
  'babel-plugin-transform-flow-strip-types',
  'babel-plugin-transform-strict-mode',
];

module.exports = {
  plugins: plugins.map(function requireModule(name) {
    return require(name);
  }),
};
