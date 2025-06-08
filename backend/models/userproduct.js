const mongoose=require('mongoose')
const userproductSchema=new mongoose.Schema({
    name:String,
    price:String,
    description:String,
    images:[{
        image:String
    }],
    category:String,
    seller:String,
    numOfReviews:String,
    createDate:Date
})
const userproductmodel=mongoose.model('userproduct',userproductSchema)

module.exports=userproductmodel