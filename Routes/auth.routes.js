const express=require('express')
const {registerUser,loginUser,updatePassword}=require('../Controllers/auth.controller')

const authRouter=express.Router()



authRouter.post('/',registerUser)
authRouter.post('/',loginUser)
authRouter.patch('/',updatePassword)



module.exports=authRouter