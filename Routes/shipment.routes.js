const express=require('express')

const shipmentRouter=express.Router()


const {shipmentGetMethod,shipmentGetMethodById,shipmentPostMethod,shipmentPutMethod, shipmentSummary}=require('../Controllers/shipment.controller')

shipmentRouter.get('/',shipmentGetMethod)
shipmentRouter.get('/byid',shipmentGetMethodById)
shipmentRouter.post('/',shipmentPostMethod)
shipmentRouter.put('/',shipmentPutMethod)
shipmentRouter.get('/summary',shipmentSummary)







module.exports=shipmentRouter