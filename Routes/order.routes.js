const express=require('express')
const {postOrder,getOrder}=require('../Controllers/order.controller')


const orderRouter=express.Router()



orderRouter.post('/',postOrder)
orderRouter.get('/',getOrder)



module.exports=orderRouter