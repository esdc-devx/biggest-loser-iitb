const { routeUtils } = require('./../../utils')
const { Schema } = require('./schema.js')

module.exports = (app, route) => {
  const name = route.name

  route.draw(app)
    .get((req, res) => {
      res.render(name, routeUtils.getViewData(req, 
        {
          id: 1,
          type: "pounds",
          startingweight: 220.20,
          weeks: [
            219.10,
            218.01,
            220,
            217.12,
          ],
        }))
    })
    .post(route.applySchema(Schema), route.doRedirect())
}
