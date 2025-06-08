const userproductmodel = require("../models/userproduct")


exports.allproduct=async(req,res,next)=>{
    const userproduct=await userproductmodel.find({})    //use await to receive all data 
    res.json({
        message:"all product here",
        userproduct
    })
}
exports.singleproduct=async(req,res,next)=>{
    try{
        const singleuserproduct=await userproductmodel.findById(req.params.id)
        res.json({
        message:"single product here",
        singleuserproduct
    })
    }
    catch(error){
        res.json({
            message:"Id doesn't match the product ",
            error_message:error.message
        })
    }
    
}
