const express =require("express");
const mongoose=require("mongoose");
const app=express();
const router=require("../Update/Router/router")
app.use(express.json())
app.use("/user",router)

const PORT=8000;

mongoose.connect("mongodb+srv://Raja:09876543210@cluster0.fkaedmz.mongodb.net/?appName=Cluster0")
.then(()=>console.log("Connet to MongoDB ..."))
.catch((err)=>console.log("Error while connecting mangoDB xxx",err))

app.listen((PORT),()=>{
console.log(`Server is Online at http://localhost:${PORT}`);

})