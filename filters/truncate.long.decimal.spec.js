const {  truncateDecimal } = require('./truncate.long.decimal')

test('returns a string with 2 decimal places', () => {
  const env = {}
  env.filters = {}
  env.addFilter = (name, func) => {
    env.filters[name] = func
  }
  truncateDecimal(env)
  const attrs = env.filters.truncateDecimal(1.1234,2)
  expect(attrs).toEqual(1.12)
})
