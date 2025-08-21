const express=require('express')
const {postOrder,getOrder,patchOrder}=require('../Controllers/order.controller')


const orderRouter=express.Router()



orderRouter.post('/neworder',postOrder)
orderRouter.get('/getorders',getOrder)
orderRouter.patch('/updateorder',patchOrder)



module.exports=orderRouter