


const postData=(ElementaryModel)=>{
   return async function (req,res) {
       try{
           const details=req.body;
           await ElementaryModel.create(details)
           res.status(200).json({
               message:"successfully placed order"
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
               message:"successfully placed order",
               details
           })
       }
       catch(err){
            res.status(400).json({
               message:"can't get details"
            })
       }
   }
}

const patchData=(ElementaryModel)=>{
  return async function (req,res) {
     try{

        const details=req.body
        const updatedDoc = await ElementaryModel.findByIdAndUpdate(
        details._id,
        { $set: details }, 
        { new: true, runValidators: true } 
      );
      res.status(200).json({
         message:"succesfully updated",
         updatedDoc
      })
     }  
     catch(err){
        res.status(400).json({
               message:err.message
            })
     } 
   }
}



module.exports={postData,getData,patchData}