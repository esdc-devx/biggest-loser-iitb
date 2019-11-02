const {  truncateDecimal } = require('./truncate.long.decimal')

function truncate(num) { 
  const env = {}
  env.filters = {}
  env.addFilter = (name, func) => {
    env.filters[name] = func
  }
  truncateDecimal(env)
  return env.filters.truncateDecimal(num,2)

}

test('returns a string with 2 decimal places', () => {
  expect(truncate(1.1245)).toEqual(1.12)
})

test('returns value if no decimal places', () => { 
  expect(truncate(500)).toEqual(500)
}) 

test('returns a negative value properly', () => { 
  expect(truncate(-31432.493535)).toEqual(-31432.49)
})