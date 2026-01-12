const jwt=require("jsonwebtoken");
const createAndsaveToken=(userId,res) => {
    const token=jwt.sign({ userId },process.env.TOKEN,{expiresIn: "10d",});
    res.cookie("jwt",token,{
        httpOnly:true,
        secure:true,
        sameSite:"strict"
    });
};
module.exports=createAndsaveToken;