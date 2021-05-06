'use strict'

const countries = require('i18n-iso-countries')

const extension = (Joi) => {
  return {
    type: "string",
    base: Joi.string(),
    messages: {
      'IsoCountryInvalidFormat': '{{#label}} needs to be a valid ISO 3166-1 alpha-2 country code',
    },
    rules: {
      country: {
        validate(value, helpers) {
          if (!countries.isValid(value)) {
            return helpers.error('IsoCountryInvalidFormat')
          }

          return value.toUpperCase()
        }
      }
    }

  }
}

module.exports = extension;
