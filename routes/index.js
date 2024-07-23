let express=require("express");
let routes=express.Router();
let userRoute=require("./user.route");
let recipeRoute=require("./movic.route")


routes.use("/user",userRoute);
routes.use("/recipe",recipeRoute)


module.exports=routes;