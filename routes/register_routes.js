const express = require("express");
const app = express.Router();
const authentication = require("../middleware/authentication.js");
const { login, loginController, registerController, checkEmailExistController, logoutController, forgotPassRender, forgotPassPost, updatePassword, newPasswordPage, resetPassword, resetPasswordRender } = require("../controllers/register_controller.js")
const { activateLinkController, renderActivatePage } = require("../controllers/activate_user_controller.js");


app.get("/", (req, res) => {
  res.render("Register/register", { error: false })
});

app.get("/login", login);

app.post("/register", registerController);

app.post("/loginCheck", loginController);

app.get("/activate", renderActivatePage);

app.get("/activate-account/:token", activateLinkController);

app.post("/check-user-email", checkEmailExistController);

app.get('/resetPassword',resetPasswordRender)

app.get("/logout", logoutController)

app.get("/forgot", forgotPassRender)

app.post("/forgot-pass", forgotPassPost)

app.get("/new-pass", newPasswordPage)

app.get("/reset-password/:token", resetPassword)

app.post("/update-password", updatePassword)


module.exports = app;