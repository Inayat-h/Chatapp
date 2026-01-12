const express=require("express");
const userControl=require("../controllers/userControl.js")
const secureRoute=require("../middlewere/secureRoute");
const Router= express.Router();


Router.post("/signup",userControl.Signup
);
Router.post("/login",userControl.login);
Router.post("/logout",userControl.logout);
Router.get("/getuser",secureRoute,userControl.getuser);

module.exports= Router;