
const mongoose=require("mongoose");

const UserSchema=mongoose.Schema(
    {
        Fullname :{
            type:String,
            required:true
            
        },
        email: {
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        },
        confirmPassword:{
            type:String,
            
        }

    },{ Textimestamps:true }
);

const User=mongoose.model("user",UserSchema);

module.exports=User;