const getElementaryData=(elementaryModel)=>{
     return async function (req,res) {
         try {
      const data = await elementaryModel.find(); 
      if (!data || data.length === 0) {
        return res.status(404).json({
          message: "No records found"
        });
      }
      res.status(200).json({
        message: "Data fetched successfully",
        count: data.length,
        data
      });
    } catch (err) {
      res.status(500).json({
        message: "Server error",
        error: err.message
      });
    }
        
     }
}

const getElementaryDataById=(elementaryModel)=>{
     return async function (req,res) {
         try {
      const data = await elementaryModel.findOne(); 
      if (!data || data.length === 0) {
        return res.status(404).json({
          message: "No records found"
        });
      }
      res.status(200).json({
        message: "Data fetched successfully",
        count: data.length,
        data
      });
    } catch (err) {
      res.status(500).json({
        message: "Server error",
        error: err.message
      });
    }
        
     }
}


const postElementaryData = (elementaryModel) => {
  return async function (req, res) {
    try {
      const details = req.body;
      const newData = new elementaryModel(details);
      await newData.save();

      res.status(201).json({
        message: "Data saved successfully",
        data: newData
      });
    } catch (err) {
      res.status(500).json({
        message: "Server error",
        error: err.message
      });
    }
  };
};


const putElementaryData = (elementaryModel) => {
  return async function (req, res) {
    try {
      const { id } = req.params; 
      const details = req.body;

    
      const updatedData = await elementaryModel.findByIdAndUpdate(
        id,
        details,
        { new: true, runValidators: true } 
      );

      if (!updatedData) {
        return res.status(404).json({
          message: "Record not found"
        });
      }

      res.status(200).json({
        message: "Data updated successfully",
        data: updatedData
      });
    } catch (err) {
      res.status(500).json({
        message: "Server error",
        error: err.message
      });
    }
  };
};


const getShipmentSummary =  (elementaryModel) => {
    return async function (req,res) {
      
  try {
    const result = await elementaryModel.aggregate([
      {
        $group: {
          _id: {
            year: "$year",
            month: "$month"
          },
          inboundCount: {
            $sum: {
              $cond: [{ $eq: ["$type", "inbound"] }, 1, 0] 
            }
          },
          outboundCount: {
            $sum: {
              $cond: [{ $eq: ["$type", "outbound"] }, 1, 0] 
            }
          }
        }
      },
      {
        $sort: { "_id.year": 1, "_id.month": 1 } 
      }
    ]);
    res.status(200).json({
      message:result
    })
  } catch (err) {
       res.status(500).json({
        message:err.message
       })
  }
}
};


module.exports={getElementaryData,postElementaryData,putElementaryData,getElementaryDataById,getShipmentSummary}