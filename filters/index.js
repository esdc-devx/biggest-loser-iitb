const { spreadParams } = require('./spread.params')
const { truncateDecimal } = require('./truncate.long.decimal')

const addNunjucksFilters = env => {
  spreadParams(env),
  truncateDecimal(env)
}

module.exports = {
  addNunjucksFilters,
}
