const express =require("express");
const mongoose=require("mongoose");
const app=express();
const router=require("../Login/router/rou)
app.use(express.json())
app.use("/user",router)

const PORT=6000;

mongoose.connect("mongodb://localhost:27017/Login123")
.then(()=>console.log("Connet to MongoDB ..."))
.catch((err)=>console.log("Error while connecting mangoDB xxx",err))

app.listen((PORT),()=>{
console.log(`Server is Online at http://localhost:${PORT}`);

})