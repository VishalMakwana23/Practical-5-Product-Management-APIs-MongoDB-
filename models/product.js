const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    "productId" : String,
    "title" : String,
    "price" : String,
    "category" : String,
    "companyId" : String,
    "sellerId" : String

});

const productModule = mongoose.model("product",productSchema,"product")

module.exports = productModule;