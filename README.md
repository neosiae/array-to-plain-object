# array-to-plain-object

![npm](https://img.shields.io/npm/v/array-to-plain-object?style=flat-square) ![Travis (.org)](https://img.shields.io/travis/neosiae/array-to-plain-object?style=flat-square) ![npm](https://img.shields.io/npm/dw/array-to-plain-object?style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/min/array-to-plain-object?style=flat-square)

Convert an array into a plain object

## Install

> npm i array-to-plain-object

## Usage

```javascript
const arrayToObject = require('array-to-plain-object')

const obj = arrayToObject(['New York', 'Berlin', 'Sarajevo'])

console.log(obj) // { 0: "New York", 1: "Berlin", 2: "Sarajevo" }
```

## License

MIT