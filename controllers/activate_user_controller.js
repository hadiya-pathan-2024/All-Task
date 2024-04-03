const jwt = require("jsonwebtoken");
var con = require("../connection/connection");

const activateLinkController = async (req, res) => {
    let token = req.params.token;
    let decode = jwt.verify(token, "JWT_SECRET");
    let email = decode.email;
    let query = `UPDATE register SET isActivated = 1 where email = '${email}'`;
    try {
        let updateQuery = await con.promise().execute(query);
        return res.redirect("/login")
    } catch (err) {
        return console.log(err);
    }
};

const renderActivatePage = async (req, res) => {
    console.log(req.cookies);
    res.render("Register/activation", { token: req.cookies.token });
};

module.exports = { activateLinkController, renderActivatePage }