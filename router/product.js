const express = require("express");
const router = express.Router();
router.use(express.json());
const product = require("../models/product");

router.get("/",(req,res)=> res.send("Product Page"));


router.post("/addProduct",(req,res)=>{
    const {addProduct} = req.body;

    if(addProduct){
        product.create(addProduct);
        return res.json({data:"Product Added Successfully"});
    }
    return res.json({data:"can't Add"});
});


router.put("/updateProductCategory", async (req,res)=>{
    const pId = req.body.productId;
    const cat = req.body.category;
    const updateProduct = await product.findOne({productId:pId});
    if(updateProduct){
        product.updateOne({productId:pId , category:cat});
        return res.json({data:"Product Category Update Successfully"});
    }
    return res.json({data:"can't Update"});
});


// router.delete("/deleteProduct", async (req,res)=>{
//     const pId = req.body.productId;
//     const deleteProduct = await product.findOneAndDelete({productId:pId});
//     if(deleteProduct){
//         return res.json({data:"Delete Product Successfully"});
//     }
//     return res.json({data:"can't delete"});
// });


router.delete("/deleteProduct/:pId",async(req,res)=>{

    const pId = req.params.pId;
    const deleteProduct = await product.findOneAndDelete({productId:pId});
    if(deleteProduct){
        return res.json({data: "deleted successfully"});
    }
    return res.json({data: "can't delete"});
});




router.get("/productByCompanyId", async (req,res)=>{
    const cId = req.body.companyId;
    if(cId){
        const findProduct = await product.findOne({companyId:cId});
        return res.json({data:findProduct});
    }
    return res.json({data:"No Any Record Found"});
});



router.get("/productBySellerId", async (req,res)=>{
    const sId = req.body.sellerId;
    if(sId){
        const details = await product.findOne({sellerId:sId});
        return res.json({data:details});
    }
    return res.json({data:"No Any Record Found"});
});

module.exports = router;