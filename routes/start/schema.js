/* istanbul ignore file */

const isValidDate = require('../../utils/').isValidDate

const Schema = {
  loserid: {
    isLength: {
      errorMessage: 'errors.loserid.length',
      options: { min: 3, max: 200 },
    },
  },
}

module.exports = {
  Schema,
}
