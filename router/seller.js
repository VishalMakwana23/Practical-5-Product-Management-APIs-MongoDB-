const express = require("express");
const router = express.Router();
router.use(express.json());
const seller = require("../models/seller");


router.get("/",(req,res)=> res.send("Seller Page"));

//Add Seller Detail
router.post("/addseller",(req,res)=>{
    const {addSeller} = req.body;

    if(addSeller){
        seller.create(addSeller);
        return res.json({data:"New Seller Added Successfully"});
    }
    return res.json({data:"can't Add"});
});


//Update Product detail
router.put("/updateProductId", async (req,res)=>{
    const sId = req.body.sellerId;
    const pId = req.body.productId;
    const findSid = await seller.findOne({sellerId:sId});
    if(findSid){
        seller.findOneAndUpdate(
            {sellerId:sId , productId:pId}
        );
        return res.json({data:"Updated Successfully"});
    }
    return res.json({data:"can't Update"});
});




// router.delete("/deleteSeller", async (req,res)=>{
//     const sId = req.body.sellerId;
//     const details = await seller.findOne({sellerId:sId});
//     if(details){
//         seller.findOneAndDelete({sellerId:sId});
//         return res.json({data:"Delete Seller Successfully"});
//     }
//     return res.json({data:"can't Delete"});
// });


//Delete Seller  usind Seller Id
router.delete("/deleteSeller/:sId",async(req,res)=>{
    const sId = req.params.sId;
    const deleteSeller = await seller.findOneAndDelete({sellerId:sId});
    if(deleteSeller){
        return res.json({data: "deleted successfully"});
    }
    return res.json({data: "can't delete"});
});

//
router.get("/sellerOfProduct", async (req,res)=>{
    const pId = req.body.productId;
    const findSeller = await seller.findOne({productId:pId});
    if(findSeller){
        return res.json({data:findSeller});
    }
    return res.json({data:"No Any Record Found"});
});















module.exports = router;