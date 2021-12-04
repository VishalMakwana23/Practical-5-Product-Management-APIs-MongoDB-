const mongoose = require("mongoose");

const sellerSchema = mongoose.Schema({
    "sellerId" : String,
    "name" : String,
    "productId" : String
});

const sellerModule = mongoose.model("seller",sellerSchema,"seller")

module.exports = sellerModule;