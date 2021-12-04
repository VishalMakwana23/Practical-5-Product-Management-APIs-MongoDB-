
require("dotenv").config();

const express = require("express");
const app = express();
app.use(express.json());
const port = 5000;
const mongoose = require("mongoose");


const companyRouter = require("./router/company");
const productRouter = require("./router/product");
const sellerRouter = require("./router/seller");

mongoose
.connect(process.env.MONGOURL)
  .then(() => console.log("mongo db connected"));

app.get("/", (req, res) => res.send("Hello fullstack!"));

app.use("/company", companyRouter)
app.use("/product", productRouter)
app.use("/seller", sellerRouter)

app.listen(port, () => console.log(`server running on port 5000`));