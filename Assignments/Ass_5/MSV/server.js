const express =require("express");
const mongoose=require("mongoose");
const app=express();
const router=require("../MSV/router/route")
app.use(express.json())
app.use("/user",router)

const PORT=8000;

mongoose.connect("mongodb://localhost:27017/vera")
.then(()=>console.log("connet to mongoDB"))
.catch((err)=>console.log("Error while connecting mangoDB",err))

app.listen((PORT),()=>{
console.log(`Server is Online at http://localhost:${PORT}`);

})