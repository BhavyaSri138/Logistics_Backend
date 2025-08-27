const express=require('express')

const shipmentRouter=express.Router()


const {shipmentGetMethod,shipmentGetMethodById,shipmentPostMethod,shipmentPutMethod, shipmentSummary,userPostMethod}=require('../Controllers/shipment.controller')

shipmentRouter.get('/',shipmentGetMethod)
shipmentRouter.get('/byid',shipmentGetMethodById)
shipmentRouter.post('/',shipmentPostMethod)
shipmentRouter.put('/',shipmentPutMethod)
shipmentRouter.get('/summary',shipmentSummary)
shipmentRouter.post('/user',userPostMethod)






module.exports=shipmentRouter