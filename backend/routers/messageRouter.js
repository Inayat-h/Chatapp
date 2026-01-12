const express=require("express")
const Router= express.Router();
const messageControl=require("../controllers/messageControl");
const secureRoute=require("../middlewere/secureRoute");

Router.post("/getmessage/:id",secureRoute,messageControl.getmessage);
Router.get("/sendmessage/:id",secureRoute,messageControl.Sendmessage);


module.exports= Router;