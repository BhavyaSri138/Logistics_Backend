const jwt=require('jsonwebtoken')

const newRegisterUser=(elementaryModel)=>{
  return async function (req,res) {
      try{
          const details=req.body;
          const findUser=await elementaryModel.findOne({email:details.email, employment:details.employment})
          if(findUser){
             return res.status(400).json({
                message:'User already exists'
             })
          }
          const newUser=await elementaryModel.create(details)
          res.status(201).json({
            message:'User successfully completed',
            newUser
          })
      }
      catch(err){
           res.status(500).json({
            message:'server error',
            error:err.message
           })
      }
  }
}

const newLoginUser=(elementaryModel)=>{
   return  async function (req,res) {
        try{
            const details=req.body
            const findUser=await elementaryModel.findOne({email:details.email, employment:details.employment})
            if(!findUser){
               return res.status(400).json({
                  message:'Invalide email or password'
                })
            }
            const comparepassword=await elementaryModel.comparePassword(details.Password)
            if(!comparepassword){
               return res.status(400).json({
                  message:'Invalide email or password'
                })
            }

            const token=await elementaryModel.generateAuthToken(jwt)
            res.status(201).json({
            message:'User successfully completed',
            findUser,
            token 
          })

        }
        catch(err){
               res.status(500).json({
            message:'server error',
            error:err.message
           })
        }
   } 
}


module.exports={newRegisterUser,newLoginUser}