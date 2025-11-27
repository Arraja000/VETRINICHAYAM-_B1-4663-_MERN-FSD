const model=require("../model/model");



const registeruser= async(req,res)=>{
try{
    const {firstName,lastName,email,password,ContactNo}=req.body;
const user=await model.findOne({firstName:firstName,lastName:lastName});
if (user){
    return res.send({msg:"User Already Exit ***"});
}
const newuser=await model.create({firstName,lastName,email,password,ContactNo});
res.status(202).json(newuser,{msg:"User Created Successfully..."});
}
catch(error){
    console.log(error);
    res.status(500).json({msg:"INternel Server Error XXX"})

}
}
const register= async(req,res)=>{
try{
const {email,password}=register.body;
const user = await model.findOne({email,password});
if(user)
{ 
    res.status(404).json({msg:"User NOt Found xxx"});
}
 res.status(200).json({msg:"Welcome to Our Website ..."});
}
catch (error){
     res.status(500).json({msg:"Internal Server Error ooo"});

}
}

const mycontroller={registeruser,register};
module.exports=mycontroller;