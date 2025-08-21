const order=require('../Models/order')
const shipments=require('../Models/shipments')

const {postData,getData,patchData}=require('../Views/reuse')


const postOrder=postData(order)
const getOrder=getData(order)
const patchOrder=patchData(order)


const postShipment=postData(shipments)
const getShipment=getData(shipments)
const patchShipment=patchData(shipments)



module.exports={postOrder,getOrder,patchOrder,postShipment,getShipment,patchShipment}