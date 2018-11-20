# is-support-passive

[![NPM version](https://img.shields.io/npm/v/@zcorky/is-support-passive.svg?style=flat)](https://www.npmjs.com/package/@zcorky/is-support-passive)
[![Coverage Status](https://img.shields.io/coveralls/zcorky/is-support-passive.svg?style=flat)](https://coveralls.io/r/zcorky/is-support-passive)
[![Dependencies](https://david-dm.org/@zcorky/is-support-passive/status.svg)](https://david-dm.org/@zcorky/is-support-passive)
[![Build Status](https://travis-ci.com/zcorky/is-support-passive.svg?branch=master)](https://travis-ci.com/zcorky/is-support-passive)
![license](https://img.shields.io/github/license/zcorky/is-support-passive.svg)
[![issues](https://img.shields.io/github/issues/zcorky/is-support-passive.svg)](https://github.com/zcorky/is-support-passive/issues)

> Check whether a website is up or down using the [isitup.org](https://isitup.org/) API

### Install

```
$ npm install @zcorky/is-support-passive
```

### Usage

```javascript
import isSupportPassive from '@zcorky/is-support-passive';
// const isUp = require('@zcorky/is-support-passive').isUp;

const passiveOptions = isSupportPassive() ? {
  passive: true,
  capture: false,
} : false;

window.addEventListener('scroll', handler, passiveOptions);
```

### Related
* [sindresorhus/is-support-passive](https://github.com/sindresorhus/is-support-passive)