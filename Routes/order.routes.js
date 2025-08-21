const express=require('express')
const {postOrder,getOrder,patchOrder,postShipment,getShipment,patchShipment}=require('../Controllers/order.controller')


const orderRouter=express.Router()
const shipmentRouter=express.Router()


orderRouter.post('/neworder',postOrder)
orderRouter.get('/getorders',getOrder)
orderRouter.patch('/updateorder',patchOrder)


shipmentRouter.post('/newShipment',postShipment)
shipmentRouter.get('/getshipment',getShipment)
shipmentRouter.patch('/updateshipment',patchShipment)

module.exports={orderRouter,shipmentRouter}