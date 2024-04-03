var con = require("../connection/connection");

const home_route = async (req, res) => {
    res.render('Home');
}

module.exports = { home_route }