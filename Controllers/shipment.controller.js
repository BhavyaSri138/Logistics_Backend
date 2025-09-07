const shipmentModel = require('../Models/shipment.model')
const userModel = require('../Models/user.model')

const {
  getElementaryData,
  postElementaryData,
  putElementaryData,
  getElementaryDataById,
  getShipmentSummary
} = require('../Views/completeMethods')

const shipmentGetMethod = getElementaryData(shipmentModel)
const shipmentPostMethod = postElementaryData(shipmentModel)
const shipmentGetMethodById = getElementaryDataById(shipmentModel)
const shipmentPutMethod = putElementaryData(shipmentModel)
const shipmentSummary = getShipmentSummary(shipmentModel)

// ✅ User methods
const userPostMethod = postElementaryData(userModel)
const userGetMethod = getElementaryData(userModel)

module.exports = {
  shipmentGetMethod,
  shipmentGetMethodById,
  shipmentPostMethod,
  shipmentPutMethod,
  shipmentSummary,
  userPostMethod,
  userGetMethod   // ✅ export new method
}
