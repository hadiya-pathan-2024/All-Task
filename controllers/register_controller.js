var con = require("../connection/connection");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

/////user exits or not
const checkEmailExistController = async (req, res) => {
  let getEmail = req.body.email;
  // getEmail = getEmail.toLowerCase();
  let sqlQuery = `SELECT * FROM register where email = '${getEmail}'`;
  try {
    let results = await con.promise().execute(sqlQuery);
    if (results[0].length) {
      return res.json({ status: "exist" });
    } else {
      return res.json({ status: "not" });
    }
  } catch (err) {
    console.log(err);
  }
};
/////forgot password

const forgotPassRender = (req, res) => {
  res.render("Register/forgot")
}

const forgotPassPost = async (req, res) => {

  let { email } = req.body;
  console.log(req.body);
  // let email = forgotEmail.toLowerCase();
  console.log(email);
  let sqlQuery = `SELECT * FROM register where email = '${email}'`;
  console.log(sqlQuery);
  try {
    let [results] = await con.promise().execute(sqlQuery);
    console.log(results);
    if (results.length === 0) {
      return res.status(401).json({ ans: "error", msg: "This email is not registered with us." });
    } else if (results[0].isActivated == 0) {
      return res.status(401).json({ ans: "error", msg: "This account has not been activated yet." });
    }
    console.log(results);
    // return res.status(401).json({ ans: "error", msg: "This account has not been activated yet." });
    let payload = { email };
    const token = jwt.sign(payload, "JWT_SECRET");
    console.log("token" + token);
    console.log(req.cookies);
    res.cookie("token", token);
    // res.render('resetPassword',{token:req.cookies.token,email:email})
    return res.status(200).json({ ans: "success", msg: "You can check the reset link." });
    // return res.render('resetPassword',{token:token})
  } catch (err) {
    console.log(err);
  }
}

const newPasswordPage = (req, res) => {
  return res.render("Register/newpass");
}

const resetPasswordRender = (req,res)=>{
  res.render("Register/resetPassword",{token:req.cookies.token});
}

const resetPassword = (req, res) => {
  let token = req.params.token;
  try {
    let decode = jwt.verify(token, "JWT_SECRET");
    let email = decode.email;
    // console.log("new Password page",);
    // res.render('newpass',{checkE:email})
    res.redirect('/new-pass')
  } catch (e) {
    console.log(e);
  }
}


const updatePassword = async (req, res) => {
  let password = req.body.pass;
  let check = jwt.verify(req.cookies.token, 'JWT_SECRET')
  console.log(check);
  let email = check.email;
  try {
    let getUserPassword = `SELECT pwd from register where email = '${email}'`;
    console.log(getUserPassword);
    let [executeGetPassword] = await con.promise().execute(getUserPassword);
    // console.log(executeGetPassword[0].pwd);
    let dbPass = executeGetPassword[0].pwd;
    const isMatch = await bcrypt.compare(password, dbPass);

    if (isMatch) {
      return res.json({ ans: "error", msg: "New password can not be same as previous one!" })
    }
    password = await bcrypt.hash(password, 10);

    let updateQuery = `UPDATE register SET pwd = '${password}'`;
    console.log(updateQuery);
    let [executeUpdateQuery] = await con.promise().execute(updateQuery);

    if (executeUpdateQuery.length != 0) {
      return res.json({ ans: "success", msg: "We have updated your password try logging in now." })
    }

  } catch (e) {
    console.log(e);
    return res.json({ ans: "error", msg: "Something went wrong! We're sorry!" })
  }
}

const logoutController = async (req, res) => {
  res.clearCookie("token");
  res.redirect('/login');
};

let executeInsert;
const registerController = async (req, res) => {
  // console.log(req.body);
  let { fname, lname, email, password } = req.body;
  console.log(req.body);
  email = email.toLowerCase();
  password = await bcrypt.hash(password, 10);
  const sqlQuery = `INSERT INTO register (fname, lname, email, pwd) VALUES('${fname}', '${lname}','${email}', '${password}')`;
  console.log("inserted");
  try {
    executeInsert = await con.promise().execute(sqlQuery);
    if (executeInsert[0]) {
      let payload = { email };
      const token = jwt.sign(payload, "JWT_SECRET");
      res.cookie("token", token);
      res.render("Register/activation", { token: token });
    }
  } catch (err) {
    console.log(err);
  }
};


let getUserData = async (email) => {
  let query = `SELECT * FROM register where email = '${email}' `;
  let [results] = await con.promise().execute(query);
  return results;
};

const login = async (req, res) => {
  res.render('Register/login')
}

const loginController = async (req, res) => {
  const { lgemail, lgpassword } = req.body;
  // console.log(req.body);
  // console.log("cookies start");
  // console.log(req.cookies);
  // console.log("cookies end");
  try {
    var results = await getUserData(lgemail);
    console.log(results);
    if (results.length === 0) {
      res.send("Invalid Credentials")
    }
    let dbPass = results[0].pwd;
    console.log(dbPass);
    let lpwd = await bcrypt.compare(lgpassword, dbPass)
    console.log(lpwd);
    let payload = { lgemail };
    const token = jwt.sign(payload, "JWT_SECRET");
    res.cookie("token", token);
    if (lpwd === true) {
      res.render('Home')
    }
    else {
      return res.send("Invalid Credentials")
    }
  } catch (err) {
    console.log(err);
    console.log(results);
  }

};


module.exports = {
  login,
  loginController,
  registerController,
  checkEmailExistController,
  logoutController,
  forgotPassRender,
  forgotPassPost,
  newPasswordPage,
  resetPassword,
  updatePassword,
  getUserData,
  resetPasswordRender
};