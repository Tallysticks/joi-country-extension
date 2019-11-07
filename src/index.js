'use strict'

const countries = require('i18n-iso-countries')

module.exports = joi => {
  return {
    base: joi.string(),
    type: 'country',
    messages: {
      'country.base': '"{{#label}}" needs to be a valid ISO 3166-1 alpha-2 country code',
    },
    validate(value, helpers) {
      if (countries.isValid(value)) {
        return { value: value.toUpperCase() }
      }
      return { value, errors: helpers.error('country.base') };
    },
  }
}
