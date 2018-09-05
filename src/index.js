'use strict'

const countries = require('i18n-iso-countries')

module.exports = joi => {
  return {
    base: joi.string(),
    name: 'string',
    language: {
      IsoCountryInvalidFormat: 'needs to be a valid ISO 3166-1 alpha-2 country code',
    },
    pre(value, state, options) {
      return value
    },
    rules: [
      {
        name: 'country',
        setup(params) {
          this._flags.country = true
        },
        validate(params, value, state, options) {
          if (countries.isValid(value)) {
            return value.toUpperCase()
          }
          return this.createError('string.IsoCountryInvalidFormat', { value }, state, options)
        },
      },
    ],
  }
}
