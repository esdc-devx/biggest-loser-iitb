// 1) add your route(s) here ⬇️
const routes = [
  { name: 'start', path: { en: '/start', fr: '/debut' } },
  { name: 'update-weight', path: {en: '/update-weight', fr: '/mettre-a-jour-de-poids'}},
  { name: 'personal', path: { en: '/personal', fr: '/personnel' } },
  { name: 'leaderboard', path: {en: '/leaderboard', fr: '/frleaderboard' }},
  { name: 'confirmation', path: '/confirmation' },
]

const locales = ['en', 'fr']

// note: you can define and export a custom configRoutes function here
// see route.helpers.js which is where the default one is defined
// if configRoutes is defined here it will be used in pacle of the default

module.exports = {
  routes,
  locales,
}
