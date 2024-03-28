const jwt = require('jsonwebtoken');

const authentication = async (req,res,next) =>{
    console.log("hello");
    if(req.cookies.token)
    {
        let token = req.cookies.token;
        // let user = jwt.verify(token,"JWT_SECRET");
        // if(user.email === "")
        // {

        // }
       
    }
    else{
        res.redirect('/login');
    }
    next();
}
module.exports=authentication