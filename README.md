# los-simuladores

[![travis build](https://img.shields.io/travis/durancristhian/los-simuladores.svg)](https://travis-ci.org/durancristhian/los-simuladores)
[![codecov coverage](https://img.shields.io/codecov/c/github/durancristhian/los-simuladores.svg)](https://codecov.io/github/durancristhian/los-simuladores)
[![version](https://img.shields.io/npm/v/los-simuladores.svg)](https://www.npmjs.com/package/los-simuladores)

> Get random names of ["Los simuladores"](https://es.wikipedia.org/wiki/Los_simuladores).

## Installation

```
npm install los-simuladores
```

## Usage

```javascript
var names = require("los-simuladores");

var allNames = names.all;
var randomName = names.random();
var threeRandomNames = names.random(3);

console.log(allNames);
console.log(randomName);
console.log(threeRandomNames);
```

License
----------
Licensed under the MIT license. Copyright (c) 2014 [@durancristhian](https://twitter.com/DuranCristhian)