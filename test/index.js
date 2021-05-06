/* eslint no-console: "off" */

'use strict'

const { should } = require('chai').use(require('chai-as-promised'))

const BaseJoi = require('joi')
const JoiCountryExtension = require('../src')

const Joi = BaseJoi.extend(JoiCountryExtension)

describe('Joi Country Extension', () => {

  before(async () => {
    should()
  })

  it(`should pass validation if valid IMO number provided`, async () => {
    const schema = Joi.string().country()
    const result = await schema.validateAsync('GB').should.be.fulfilled
    result.should.be.equal('GB')
  })

  it(`should fail validation if IMO number provided without the 'IMO' prefix`, async () => {
    const schema = Joi.string().country()
    const result = await schema.validateAsync('de').should.be.fulfilled
    result.should.be.equal('DE')
  })

  it(`should fail validation if invalid string is provided`, async () => {
    const schema = Joi.string().country()
    const error = await schema.validateAsync('Denmark').should.be.rejected
    error.message.should.equal('"value" needs to be a valid ISO 3166-1 alpha-2 country code')
  })

  it(`should fail validation if IMO number is not provided as a string`, async () => {
    const schema = Joi.string().country()
    const error = await schema.validateAsync(123).should.be.rejected
    error.message.should.equal('"value" must be a string')
  })

})
