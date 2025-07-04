const userordermodel = require("../models/userorder")


exports.userorder=async(req,res,next)=>{
    const orderItems=req.body
    const totalAmount=Number(orderItems.reduce((acc,singleorderitem)=>(acc+(singleorderitem.product.price*singleorderitem.qty)),0)).toFixed(2)
    console.log(totalAmount,'amount')
    const status="pending"
    const userorder=await userordermodel.create({orderItems,totalAmount,status})
    res.json({
        message:"user order success",
        userorder
    })
}