

const postData=(ElementaryModel)=>{
   return async function (req,res) {
       try{
           const details=req.body;
           await ElementaryModel.create(details)
           res.status(200).json({
               message:"successfully placex order"
           })
       }
       catch(err){
            res.status(400).json({
               message:"order not placed"
            })
       }
   }
}

const getData=(ElementaryModel)=>{
   return async function (req,res) {
       try{
           const details=await ElementaryModel.find()
           res.status(200).json({
               message:"successfully placex order",
               details
           })
       }
       catch(err){
            res.status(400).json({
               message:"cant get details"
            })
       }
   }
}




module.exports={postData,getData}