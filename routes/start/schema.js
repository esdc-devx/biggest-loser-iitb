/* istanbul ignore file */


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
