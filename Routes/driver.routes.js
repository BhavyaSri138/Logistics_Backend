const express=require('express')

const driverRouter=express.Router()

const {driverGetMethod,driverGetMethodById,driverPostMethod}=require('../Controllers/driver..controller')




driverRouter.get('/',driverGetMethod)
driverRouter.get('/byid',driverGetMethodById)
driverRouter.post('/',driverPostMethod)



module.exports=driverRouter