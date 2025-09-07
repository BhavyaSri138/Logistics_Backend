const express = require('express')
const shipmentRouter = express.Router()

const {
  shipmentGetMethod,
  shipmentGetMethodById,
  shipmentPostMethod,
  shipmentPutMethod,
  shipmentSummary,
  userPostMethod,
  userGetMethod   // ✅ import it
} = require('../Controllers/shipment.controller')


shipmentRouter.get('/', shipmentGetMethod)
shipmentRouter.get('/byid', shipmentGetMethodById)
shipmentRouter.post('/', shipmentPostMethod)
shipmentRouter.put('/', shipmentPutMethod)
shipmentRouter.get('/summary', shipmentSummary)

// ✅ Add User routes
shipmentRouter.post('/user', userPostMethod)
shipmentRouter.get('/user', userGetMethod)

module.exports = shipmentRouter
