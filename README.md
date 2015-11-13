# Babel presets for Node 5.x

Node 5.x brings ~59% [native ES6/ES2015 coverage](https://nodejs.org/en/docs/es6/). This preset for Babel 6 attempts
to bridge the gap for the much of the remaining 41% using [Babel plug-ins](https://github.com/babel/babel/tree/master/packages).

## Motivation

Babel 6.x is awesome, but simply including the [ES2015 preset](babel-preset-es2015) means you're transpiling features
that your Node 5.x installation can already do faster and natively, replacing them with inferior / old code.

This preset complements existing V8-native functionality - it doesn't work _around_ it.

The end result is nearly always a faster build and script execution time.

## Key features:

* Versioning that tracks [Babel releases](https://github.com/babel/babel/releases)
* React / JSX support (via [babel-preset-react](https://www.npmjs.com/package/babel-preset-react))
* Flow support (removes types) via [babel-plugin-transform-flow-strip-types](https://www.npmjs.com/package/babel-plugin-transform-flow-strip-types)
* Strict mode, to enable Classes and `let` (via [babel-plugin-transform-strict-mode](https://www.npmjs.com/package/babel-plugin-transform-strict-mode))
* CommonJS import/export module syntax ([babel-plugin-transform-es2015-modules-commonjs](https://www.npmjs.com/package/babel-plugin-transform-es2015-modules-commonjs))
* [Destructuring](http://www.2ality.com/2015/01/es6-destructuring.html) (via [babel-plugin-transform-es2015-destructuring](https://www.npmjs.com/package/babel-plugin-transform-es2015-destructuring))
* Default and rest parameters (via [babel-plugin-transform-es2015-parameters](https://www.npmjs.com/package/babel-plugin-transform-es2015-parameters))
* Sticky RegEx (via [babel-plugin-transform-es2015-sticky-regex](https://www.npmjs.com/package/babel-plugin-transform-es2015-sticky-regex))
* Unicode RegEx (via [babel-plugin-transform-es2015-unicode-regex](https://www.npmjs.com/package/babel-plugin-transform-es2015-unicode-regex))

## Usage:
