const mongoose=require("mongoose")

const schema= new mongoose.Schema({
name:{
    type:String,
    required:true
},
age : {

    type:Number,
    required:true
},

city : {

    type:String,
    required:true
},

PinNo : {

    type:Number,
    required:true
},
ContactNo : {

    type:Number,
    required:true
},

})

module.exports=mongoose.model("user",schema);
