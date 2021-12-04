const express = require("express")
const router = express.Router()
router.use(express.json())
const company = require("../models/company")


router.get("/",(req,res)=> res.send("Company Page"));


router.get("/companyproducts", async (req, res) => {
    const cid = req.body.companyId
    const detail = await company.findOne({ companyId: cid })

    if(detail){
        return res.json({ data: detail })
    }
    res.json({ data: "No any reccord found" })
})


router.post("/addCompany", (req, res) => {
    const { addCompany } = req.body

    if(addCompany){
        company.create(addCompany)
        res.json({ data: "New Company Added" })
    }
    res.json({ data: "can't add company" })
})


router.put("/updateProductId", async (req,res)=>{
    const cid = req.body.companyId
    const name = req.body.name
    const findCid = await company.findOne({companyId: cid});
    if(findCid){
        const details = await company.findOneAndUpdate(
            { companyId: cid },
            { name: name }
        );
        return res.json({ data:"Company details Updated Successfully" })
    }
    return res.json({data:"can't update"})
});



// router.delete("/deleteCompany", async (req,res)=>{
//     const cid = req.body.companyId
//     const findCid = await company.findOne({companyId:cid})
//     if(findCid){
//         company.findOneAndDelete(
//             { companyId:cid }
//         );
//         return res.json({ data:"Delete Company Details" })
//     }
//     return res.json({data:"No Data Found"})
// });

router.delete("/deleteCompany/:cId",async(req,res)=>{

    const cId = req.params.cId;
    const deleteCompany = await company.findOneAndDelete({companyId:cId});
    if(deleteCompany){
        return res.json({data: "deleted successfully"});
    }
    return res.json({data: "can't delete"});
});


module.exports = router