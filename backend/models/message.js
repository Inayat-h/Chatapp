const mongoose=require("mongoose");
const user=require("./userModel.js");
const messageSchema=mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    recieverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    message:{
        type:String,
        required:true

    }
},{timestamps:true});

const message=mongoose.model("message",messageSchema);
module.exports=message;