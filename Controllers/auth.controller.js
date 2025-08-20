const authModel=require('../Models/user.auth')
const {newRegitserUser,newLoginUser,newUpdatePassword}=require('../Views/auth.views')

const registerUser=newRegitserUser(authModel)
const loginUser=newLoginUser(authModel)
const updatePassword=newUpdatePassword(authModel)



module.exports={registerUser,loginUser,updatePassword}