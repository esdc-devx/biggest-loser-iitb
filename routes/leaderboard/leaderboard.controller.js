const { routeUtils } = require('./../../utils')
const { Schema } = require('./schema.js')

function getResult(id, percentageLoss ) { 
  return { 
    id, 
    percentageLoss
  }
}

module.exports = (app, route) => {

  const name = route.name

  route.draw(app)
    .get((req, res) => {
      res.render(name, routeUtils.getViewData(req, {
  
        results: [ 
          getResult(1,0.1),
          getResult(2,0.2),
          getResult(3,1),
          getResult(4,0.01),
          getResult(5,0.023),
          getResult(6,0.004),
          getResult(7,0.001)
        ]

      }))
    })
    .post(route.applySchema(Schema), route.doRedirect())
}
