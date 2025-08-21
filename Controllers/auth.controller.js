const authModel=require('../Models/user.auth')
const {newRegisterUser,newLoginUser}=require('../Views/auth.views')

const registerUser=newRegisterUser(authModel)
const loginUser=newLoginUser(authModel)
// const updatePassword=newUpdatePassword(authModel)



module.exports={registerUser,loginUser}