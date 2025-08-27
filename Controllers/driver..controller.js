const driverModel=require('../Models/driver.model')

const {getElementaryData,postElementaryData,putElementaryData,getElementaryDataById}=require('../Views/completeMethods')


const driverGetMethod=getElementaryData(driverModel)
const driverPostMethod=postElementaryData(driverModel)
const driverGetMethodById=getElementaryDataById(driverModel)




module.exports={driverGetMethod,driverGetMethodById,driverPostMethod}