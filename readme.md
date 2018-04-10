# Joi Country Extension

A Joi extension for validation of [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes.

### Installation

```
npm install --save joi-country-extension
```

### Usage

```js
const BaseJoi = require('joi')
const JoiIMONumberExtension = require('joi-imo-number-extension')
const Joi = BaseJoi.extend(JoiIMONumberExtension)

const schema = Joi.string().imoNumber()
const result = await schema.validate('IMO 7035341')

console.log(result) // IMO 7035341
```
