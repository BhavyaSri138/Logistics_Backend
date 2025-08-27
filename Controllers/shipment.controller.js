const shipmentModel=require('../Models/shipment.model')
const userModel=require('../Models/user.model')


const {getElementaryData,postElementaryData,putElementaryData,getElementaryDataById,getShipmentSummary}=require('../Views/completeMethods')


const shipmentGetMethod=getElementaryData(shipmentModel)
const shipmentPostMethod=postElementaryData(shipmentModel)
const shipmentGetMethodById=getElementaryDataById(shipmentModel)
const shipmentPutMethod=putElementaryData(shipmentModel)
const shipmentSummary=getShipmentSummary(shipmentModel)
const userPostMethod=postElementaryData(userModel)

module.exports={shipmentGetMethod,shipmentGetMethodById,shipmentPostMethod,shipmentPutMethod,shipmentSummary,userPostMethod}