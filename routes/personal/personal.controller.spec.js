const request = require('supertest')
const app = require('../../app.js')
const cheerio = require('cheerio')

const session = require('supertest-session');

function extractCsrfToken(res) {
  var $ = cheerio.load(res.text);
  return $('[name=_csrf]').val();
}

test('Can send get request personal route ', async () => {
  const route = app.routes.get('personal')
  const response = await request(app).get(route.path.en)
  expect(response.statusCode).toBe(200)
})

// @todo test sending a form request
test('Can send post request personal route ', async () => {
  const route = app.routes.get('personal')

  // to test form with csrf token, need a session, and a token from a get request
  const testSession = session(app);
  const getresp = await testSession.get(route.path.en);
  const csrfToken = extractCsrfToken(getresp);

  const postresp = await testSession.post(route.path.en).send({ _csrf: csrfToken });
  expect(postresp.statusCode).toBe(200);
})

jest.mock('../../utils/flash.message.helpers', () => ({
  getFlashMessage: jest.fn(req => {
    return { fieldname: { value: '', msg: 'caught this error', param: 'testerror', location: 'body' } }
  }),
}))

test('Display errors on the page', async () => {
  const route = app.routes.get('personal')
  const response = await request(app).get(route.path.en)
  expect(response.statusCode).toBe(200)
  expect(response.text).toContain('caught this error')
})
