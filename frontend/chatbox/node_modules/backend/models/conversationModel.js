const mongoose=require("mongoose");

const user=require("./userModel.js");
const message = require("./message.js");

const conversationSchema=mongoose.Schema({
    members:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:user
        }
    ],
    messages:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:message,
            default:[]
        }
    ]
},{
    Timestamps:true
});
const conversation=mongoose.model("conversation",conversationSchema);
module.exports=conversation;
