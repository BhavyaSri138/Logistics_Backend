const shipmentModel=require('../Models/shipment.model')

const {getElementaryData,postElementaryData,putElementaryData,getElementaryDataById,getShipmentSummary}=require('../Views/completeMethods')


const shipmentGetMethod=getElementaryData(shipmentModel)
const shipmentPostMethod=postElementaryData(shipmentModel)
const shipmentGetMethodById=getElementaryDataById(shipmentModel)
const shipmentPutMethod=putElementaryData(shipmentModel)
const shipmentSummary=getShipmentSummary(shipmentModel)


module.exports={shipmentGetMethod,shipmentGetMethodById,shipmentPostMethod,shipmentPutMethod,shipmentSummary}