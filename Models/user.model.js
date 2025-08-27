const mongoose = require('mongoose');


const userSchema=new mongoose.Schema({
    username:{
        type:String,

    },
    type:{
        type:String,
        enum:['Warehouse manager','delivery staff']
    }
})

const userModel=mongoose.model('userData',userSchema)


module.exports=userModel


