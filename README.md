# Babel preset for React Native HMR

This preset will configure Babel 6 for
[https://github.com/gaearon/react-transform-hmr](https://github.com/gaearon/react-transform-hmr)
and React Native.

It is recommended that this preset only be configured
for your development builds.

[![github home](https://img.shields.io/badge/YADI%20Social-babel--preset--react--native--hmre-green.svg?style=flat-square)](https://github.com/yadi-social/babel-preset-react-native-hmre)
[![github issues](https://img.shields.io/github/issues/yadi-social/babel-preset-react-native-hmre.svg?style=flat-square)](https://github.com/yadi-social/babel-preset-react-native-hmre/issues)
[![david-dm](https://img.shields.io/david/yadi-social/babel-preset-react-native-hmre.svg?style=flat-square)][npm-package]
[![npm version](https://img.shields.io/npm/v/babel-preset-react-native-hmre.svg?style=flat-square)][npm-package]
[![npm downloads](https://img.shields.io/npm/dm/babel-preset-react-native-hmre.svg?style=flat-square)][npm-package]
[![npm license](https://img.shields.io/npm/l/babel-preset-react-native-hmre.svg?style=flat-square)][npm-package]

-   [Installation](#installation)
-   [Usage](#usage)
-   [License](#license)

---

## Installation

`$ npm install babel-preset-react-native-hmre --save`

## Usage

Configure babel via .babelrc

```json
{
  "presets": [ "react", "es2015" ],
  "env": {
    "development": {
      "presets": [ "react-native-hmre" ]
    }
  }
}
```

## License

[The MIT License](../master/LICENSE)

[npm-package]: https://www.npmjs.com/package/babel-preset-react-native-hmre
