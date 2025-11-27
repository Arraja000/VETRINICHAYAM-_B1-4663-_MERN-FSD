const mongoose=require("mongoose")

const schema= new mongoose.Schema({
firstName:{
    type:String,
    required:true
},
lastName : {

    type:String,
    required:true
},

email: {

    type:String,
    required:true,
    match : /^[\w.-]+@[\a-z]+\.com$/
},

password : {

    type:String,
    required:true,
    match: /^[\w.-]{8}$/
},
ContactNo : {

    type:Number,
    required:true
},

})

module.exports=mongoose.model("DATA",schema);