# Joi Country Extension

A Joi extension for validation of [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes.

### Installation

```
npm install --save joi-country-extension
```

### Usage

```js
const BaseJoi = require('joi')
const JoiCountryExtension = require('joi-country-extension')
const Joi = BaseJoi.extend(JoiCountryExtension)

const schema = Joi.string().country()
const result = await schema.validate('gb')

console.log(result) // GB
```
