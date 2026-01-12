const jwt=require("jsonwebtoken");
const user=require("../models/userModel");

const secureRoute= async(req,res,next)=>{
 try{
    const token=req.cookies.jwt;
    if(!token){
       return  res.status(401).json({error:"no token :autherization denied"});
    }
    const decoded=jwt.verify(token,process.env.TOKEN);
    if(!decoded){
       return  res.status(401).json({error:"invalid user"}); 
    }
    const User=await user.findById(decoded.userId).select("-password");
    if(!user){
        return  res.status(401).json({error:" user not found"});  
    }
    req.user=User;
    next()

}catch(error){
    console.log("error in securroute"+error);
}
}
module.exports=secureRoute;
