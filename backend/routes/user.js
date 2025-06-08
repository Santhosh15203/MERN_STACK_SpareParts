const express=require('express')
const { allproduct, singleproduct } = require('../controllers/userproduct')
const { userorder } = require('../controllers/userorder')
const router=express.Router()

router.get('/product',allproduct)
router.get('/product/:id',singleproduct)
router.post('/order',userorder)


module.exports=router