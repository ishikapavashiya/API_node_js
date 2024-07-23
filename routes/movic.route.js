let express = require("express");
const { bookcontroller, movicecontroller } = require("../controller");
const validate = require("../middleware/validate");
const { movicevalidation } = require("../validations");
const { islogin } = require("../middleware/auth");
let route = express.Router();

route.post("/register", validate(movicevalidation.user), moviccontroller.register);
route.get("/get", islogin, movicecontroller.getAlluser);
route.delete("/deleteuser/:id", movicecontroller.deleteuser);
route.put("/updata/:id", validate(movicevalidation.user), moviccontroller.updateUser)

// login
route.post("/login", validate(movicevalidation.user), moviccontroller.login);
route.get("/profile",islogin, moviccontroller.Profile)
module.exports = route; 