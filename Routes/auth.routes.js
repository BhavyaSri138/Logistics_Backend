const express=require('express')
const {registerUser,loginUser}=require('../Controllers/auth.controller')

const authRouter=express.Router()



authRouter.post('/signup',registerUser)
authRouter.post('/login',loginUser)
// authRouter.patch('/updatepassword',updatePassword)



module.exports=authRouter