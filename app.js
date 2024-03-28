var express = require('express');
var app = express();
app.set('view engine','ejs');
app.use(express.static('public'));
var mysql = require('mysql2');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.urlencoded({extended: false}))
const jwt = require('jsonwebtoken');
const bcrypt = require ('bcrypt');
app.use(express.json());
var cookieParser = require('cookie-parser');
app.use(cookieParser());
var authentication = require('./middleware/authentication.js');


//database connection
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Dev@123",
    database: "all_tasks"
});

con.connect(function(err){
    if(err) throw err;
    console.log("connected");
})
//home
app.get('/home',authentication,function(req,res)
{
    res.render('Home');
})

////Registration Login

app.get("/", (req, res) => {
    res.render("Register/register", {error: false})
  });
  let executeInsert;
  app.post('/register',async (req, res) => {
    // console.log(req.body);
    let { fname,lname,email, password } = req.body;
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
        res.render("Register/activation", { token:token });
      }
    } catch (err) {
      console.log(err);
    }
  });
  
  app.get("/activate-account/:token", async(req, res) => {
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
  });
  
  app.get("/activate", async(req, res) => {
    console.log(req.cookies);
    res.render("Register/activation",{token:req.cookies.token});
  });
  
  app.get('/login',function(req,res)
  {
    res.render('Register/login')
  })
  
  let getUserData = async (email) => {
    let query = `SELECT * FROM register where email = '${email}' `;
    let [results] = await con.promise().execute(query);
    return results;
  };
  
  app.post('/loginCheck', async (req, res) => {
    const { lgemail, lgpassword} = req.body; 
    // console.log(req.body);
    // console.log("cookies start");
    // console.log(req.cookies);
    // console.log("cookies end");
    try {
      var results = await getUserData(lgemail);
      console.log(results);
      if(results.length === 0)
      {
        res.send("Invalid Credentials")
      }
      let dbPass = results[0].pwd;
      console.log(dbPass);
      let lpwd =  await bcrypt.compare(lgpassword, dbPass)
      console.log(lpwd);
      let payload = { lgemail };
      const token = jwt.sign(payload, "JWT_SECRET");
      res.cookie("token", token);
      if(lpwd === true)
      {
        res.render('Home')
      }
      else {
        return res.send("Invalid Credentials")
      }
    } catch (err) {
      console.log(err);
      console.log(results);
    }
  
  });
  
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
  
  const forgotPassPost = async(req, res) =>{
   
      let {email} = req.body;
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
        }else if(results[0].isActivated == 0){
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
          return res.status(200).json({ans: "success", msg: "You can check the reset link."});
          // return res.render('resetPassword',{token:token})
      } catch (err) {
        console.log(err);
      }
  }
  app.get('/resetPassword',function(req, res){
    // let check = jwt.verify(req.cookies.token,'JWT_SECRET')
    // console.log(check);
    // console.log(req.cookies);
    res.render("Register/resetPassword",{token:req.cookies.token});
  });
  
  const newPasswordPage = (req, res) => {
      return res.render("Register/newpass");
  }
  
  const resetPassword = (req, res) => {
      let token = req.params.token;
      try{
        let decode = jwt.verify(token, "JWT_SECRET");
        let email = decode.email;
        // console.log("new Password page",);
        // res.render('newpass',{checkE:email})
        res.redirect('/new-pass')
      }catch(e){
        console.log(e);
      }
  }
  
  const updatePassword = async(req, res) => {
    let password = req.body.pass;
    let check = jwt.verify(req.cookies.token,'JWT_SECRET')
    console.log(check);
     let email = check.email;
    try{
      let getUserPassword = `SELECT pwd from register where email = '${email}'`;
      console.log(getUserPassword);
      let [executeGetPassword] = await con.promise().execute(getUserPassword);
      // console.log(executeGetPassword[0].pwd);
      let dbPass = executeGetPassword[0].pwd;
      const isMatch = await bcrypt.compare(password, dbPass);
  
      if(isMatch){
        return res.json({ans: "error", msg: "New password can not be same as previous one!"})
      }
      password = await bcrypt.hash(password, 10);
  
      let updateQuery = `UPDATE register SET pwd = '${password}'`;
      console.log(updateQuery);
      let [executeUpdateQuery] = await con.promise().execute(updateQuery);
  
      if(executeUpdateQuery.length != 0){
        return res.json({ans: "success", msg: "We have updated your password try logging in now."})
      }
  
    }catch(e){
      console.log(e);
      return res.json({ans: "error", msg: "Something went wrong! We're sorry!"})
    }
  
  }
////logout
  app.get('/logout',authentication,(req,res) =>
  {
    res.clearCookie("token");
    res.redirect('/login');
  })

  app.post("/check-user-email", checkEmailExistController);
  
  app.get("/forgot", forgotPassRender)
  
  app.post("/forgot-pass", forgotPassPost)
  
  app.get("/new-pass", newPasswordPage)
  
  app.get("/reset-password/:token", resetPassword)
  
  app.post("/update-password", updatePassword)
  
//task1
app.get('/task1',authentication,function(req,res)
{
    res.render('Task1/Task1_AllEvents');
});
//task2
app.get('/task2',authentication,function(req,res)
{
    res.render('Task2/Task2_AddingRowCol');
})
//task3
app.get('/task3',authentication,function(req,res)
{
    res.render('Task3/Task3_kukukube');
})
//task4
app.get('/task4',authentication,function(req,res)
{
    res.render('Task4/Task4_tictactoe');
})
//task5
app.get('/task5',authentication,function(req,res)
{
    res.render('Task5/Task5_ehyaWebsite');
})
//task6
app.get('/task6',authentication,function(req,res)
{
    res.render('Task6/Website_awanHoster');
})
//task7
app.get('/task7',authentication,function(req,res)
{
    res.render('Task7/Website_Hirex');
})
//task8
app.get('/task8',authentication,function(req,res){
   
    console.log(req.query)
    var currentPage =+ req.query.pages || 1;
    var pageSize = 10;
    var offset = (currentPage - 1) * pageSize;
    const sortCol = req.query.sort || 'firstName';
    const sortDirection = req.query.direction === 'desc' ? 'desc' : 'asc';
    console.log(sortCol)

    con.query(`select firstName,lastName ,DATE_FORMAT(DOB ,'%m/%d/%y') as DOB ,contactNum,emailId, Address, City, State, country, zipCode, bloodGroup,createdAt
     from student_master_5000Records ORDER BY ${sortCol} ${sortDirection}  limit ${pageSize} offset ${offset}`,
     (err, result) => {
        if(err) {
            console.log(err);
            res.send("wrong")
        }else{
            const total = result[0].total;
            const lastIndex = Math.floor(50000/10);
            console.log(currentPage, total)
            console.log((pageSize*currentPage)<total)
            res.render('Task8/dataListing_orderBy',{
                data: result , 
                page: currentPage,
                nextPage: currentPage + 1,
                prevPage: currentPage -1,
                lastPage: Math.ceil(50000/pageSize),
                hasNextPage: (pageSize*currentPage)<50000,
                lastIndex: lastIndex,
                hasPreviousPage: currentPage>1,
                sortBy:sortCol,
                sortDirection: sortDirection,
                currentPage,
                // sortOrder: sortOrder,
                // sort: resultsSort,
            });
    }
})
});

//task9
app.get('/task9',authentication,function(req,res)
{
    console.log(req.query)
    var currentPage =+ req.query.page || 1;
    // console.log(typeof(currentPage))
    var pageSize = 20;
    var offset = (currentPage - 1) * pageSize;
    // const month = req.query.month || "december";
    // const year = req.query.year || "2023";
    select = req.query.select || "2023-12-30";
    arr = select.split("-");

    con.query(`select student_master.studentId,student_master.firstName,count(attendance_master.record) as total_days 
    from attendance_master
    left join student_master 
    on student_master.studentId=attendance_master.studentId
    where attendance_master.record="Present" and attendance_master.Attendance between "${arr[0]}-${arr[1]}-01" and
    "${arr[0]}-${arr[1]}-${arr[2]}" group by student_master.studentId,attendance_master.record order by student_master.studentId limit ${pageSize} offset ${offset}`,
     (err, result) => {
        if(err) {
            console.log(err);
            res.send("wrong")
        }else{
            const lastIndex = Math.floor(200/10);
            res.render('Task9/attendance_report.ejs',{
                data: result , 
                page: currentPage,
                nextPage: currentPage + 1,
                prevPage: currentPage -1,
                lastPage: Math.ceil(200/pageSize),
                hasNextPage: (pageSize*currentPage)<200,
                lastIndex: lastIndex,
                hasPreviousPage: currentPage>1,
                month: Number(`${arr[1]}`),
                select:select,
                days: Number(`${arr[2]}`),
            });
    }
})
})

//task10
app.get('/task10',authentication,function(req,res){
    console.log(req.query)
    var currentPage =+ req.query.page || 1;
    var pageSize = 20;
    var offset = (currentPage - 1) * pageSize;
    // const month = req.query.month || "december";
    // const year = req.query.year || "2023";
    select = req.query.select || "2023-12-30";
    arr = select.split("-");

    con.query(`
    select student_master.studentId,student_master.firstName,
    sum(case when result_master.examId=1 then result_master.theorymarks else 0 end) as PrelimTheory,
    sum(case when result_master.examId=1 then result_master.practicalMarks else 0 end) as PrelimPrac,
    sum(case when result_master.examId=2 then result_master.theorymarks else 0 end) as TerminalTheory,
    sum(case when result_master.examId=2 then result_master.practicalMarks else 0 end) as TerminalPrac,
    sum(case when result_master.examId=3 then result_master.theorymarks else 0 end) as FinalTheory,
    sum(case when result_master.examId=3 then result_master.practicalMarks else 0 end) as FinalPrac
      from student_master
      left join result_master 
      on student_master.studentId=result_master.studentId
      group by student_master.studentId
      order by student_master.studentId limit ${pageSize} offset ${offset}`,
     (err, result) => {
        if(err) {
            console.log(err);
            res.send("wrong")
        }else{
            const lastIndex = Math.floor(200/10);
            res.render('Task10/result.ejs',{
                data: result , 
                page: currentPage,
                nextPage: currentPage + 1,
                prevPage: currentPage -1,
                lastPage: Math.ceil(200/pageSize),
                hasNextPage: (pageSize*currentPage)<200,
                lastIndex: lastIndex,
                hasPreviousPage: currentPage>1,
                month: Number(`${arr[1]}`),
                select:select,
                days: Number(`${arr[2]}`),
            });
    }
})
});

app.get('/view/:id',function(req,res){
    var userId = req.params.id;
    var sql = 
    `
    select student_master.studentId,student_master.firstName,subject_master.subjectName,
    sum(case when result_master.examId=1 then result_master.theorymarks else 0 end) as PrelimTheory,
    sum(case when result_master.examId=1 then result_master.practicalMarks else 0 end) as PrelimPrac,
    sum(case when result_master.examId=2 then result_master.theorymarks else 0 end) as TerminalTheory,
    sum(case when result_master.examId=2 then result_master.practicalMarks else 0 end) as TerminalPrac,
    sum(case when result_master.examId=3 then result_master.theorymarks else 0 end) as FinalTheory,
    sum(case when result_master.examId=3 then result_master.practicalMarks else 0 end) as FinalPrac
    from ((student_master
    inner join result_master 
    on student_master.studentId=result_master.studentId)
    left join subject_master 
    on result_master.subjectId=subject_master.subjectId)
    where result_master.studentId = ${userId}
    group by result_master.subjectId;
     `;
    con.query(sql, function(err , results){
        let queryAtt = `select count(studentId) as att from attendance_master where attendance_master.record="Present" and studentId = ${userId}`;
        con.query(queryAtt, function(err, result2){
            if (err) {
                console.log(err);
            }
            else{
                console.log(result2);
                console.log(results);
            }       
        res.render('Task10/view.ejs',{
            view:results,
            atten:result2,
            totalMarks: 0,
        }
        );
    })
})
});

//Task11
app.get('/task11',authentication,function(req,res){
    const pageSize = 10;
    const currentPage =+ req.query.page || 1;
    let offset = (currentPage-1)*pageSize;
    let finalQuery;
    // const lastIndex = 20;
    const query1 = req.query.query || "select * from student_master";
    let arr = query1.split(" ");
    let position = arr.indexOf("limit");
    if(arr.includes("limit")){
        offset=(currentPage-1)*arr[position+1]
        finalQuery=`${query1} offset ${offset}`
    }
    else{
        finalQuery = `${query1} limit 10 offset ${offset}`  
    }
    console.log(query1);
   
   
    con.query(finalQuery, (err,result)=>{
        if(err){
            // console.log("data not found");
            res.render("Task11/invalid.ejs",{errorDisplay: "invalid query"});
        }
        else{
            if(result.length==0){
                res.render("Task11/invalid.ejs",{errorDisplay: "No data found"})
            }
            else{
                let key = Object.keys(result[0]);
                console.log(key);
                res.render("Task11/dynamicData.ejs",{
                    result,key, 
                    page: currentPage,
                    nextPage: currentPage + 1,
                    prevPage: currentPage -1,
                    lastPage: Math.ceil(200/pageSize),
                    hasNextPage: (pageSize*currentPage)<200,
                    hasPreviousPage: currentPage>1,
                    // lastIndex:lastIndex,
                    finalQuery: query1,
                })
            }
        }
      
    })
});

//task12
app.get('/task12',authentication,function(req,res){
    console.log(req.query)
    var currentPage =+ req.query.page || 1;
    var pageSize = 20;
    var offset = (currentPage - 1) * pageSize;
    // const month = req.query.month || "december";
    // const year = req.query.year || "2023";
    select = req.query.select || "2023-12-30";
    arr = select.split("-");
    var id  = req.query.studentId || " ";
    var firstName = req.query.firstName || "";
    var lastName = req.query.lastName || "";
    var option = req.query.option || "or";

    console.log(id);
    con.query(`select student_master.studentId,student_master.firstName,student_master.lastName 
     from student_master left join result_master 
     on student_master.studentId=result_master.studentId
      where ${id}  student_master.firstName LIKE '%${firstName}%' ${option} student_master.lastName LIKE '%${lastName}%'
     group by student_master.studentId 
     order by student_master.studentId  
     limit ${pageSize} offset ${offset}`,
     (err, result) => {
        if(err) {
            console.log(err);
            res.send("wrong")
        }else{
            const lastIndex = Math.floor(200/10);
            res.render('Task12/search.ejs',{
                data: result , 
            });
    }
})
});
//task13
let func = require('./task13Function.js');
app.get('/task13',authentication,function(req,res){
    let query1 = req.query.searchQuery || "select * from student_master_5000Records limit 10";
    let string1 = "select * from student_master_5000Records limit 10";
    if(query1!="select * from student_master_5000Records limit 10"){
        string1=query1;
    }
    if(query1==="select * from student_master_5000Records limit 10"){

    }else{
        query1=func.strReturn(string1);
    }
     con.query(query1,
     (err, result) => {
        if(err) {
            console.log(err);
            res.send("wrong")
        }else{
            res.render('Task13/delimitedSearch.ejs',{
                data: result ,
                query:string1
            });
    }
})
});
//task14
app.get('/task14',authentication,function(req,res){
    res.sendFile(__dirname+"/views/Task14/jsonAPI.html");
})

app.get('/details',function(req,res){
    res.sendFile(__dirname+"/views/Task14/individual.html")
});

//task15
app.get('/task15',authentication,function(req,res){
    res.render('Task15/form.ejs',{data : null,data1 : null,data2 : null,data3 : null,data4 : null,data5 : null,data6 : null,data7:null,i:0,j:0});
});

app.post('/saveAjax',function(req,res){
console.log(req.body);
let dataInsert = req.body;
let {id} = dataInsert
let {eduArr} = dataInsert;
let {cidArr} = dataInsert;
let {arrlangKnown} = dataInsert;
let {techKnown} = dataInsert;
let userId = id;
const {fname,lname,desig,emailid,Pnumber,gendervalue,statusRelation,address,add2,city,state,zipcode,dob} = dataInsert;
let {companyNameArr,companyDesigArr,companyFromArr,companyToArr} = dataInsert;
let {refNameArr,refNumArr,refRelationArr} = dataInsert;
let {boardArr,yearArr,perArr} =  dataInsert;
let {refArr} = dataInsert;
let {location,noticeP,expectedCTC,currentCTC,department} = dataInsert;

if(userId){
    ///basic details
    var sql = `update basic_detail set firstname='${fname}' , lastname='${lname}' , designation='${desig}' , email='${emailid}' , phone='${Pnumber}' , gender='${gendervalue}'
    , relation='${statusRelation}' , add1='${address}' , add2='${add2}' , city='${city}' , state='${state}' , zipcode='${zipcode}' , dob='${dob}'  where id = '${userId}'`;
    con.query(sql ,function(err, data){
    if(err) throw err;
    console.log(data.affectedRows + "Basic records updated");
})
    ////education
    for(let j=0;j<boardArr.length;j++)
    {  var sql2 
        if(eduArr[j] != ''){
        sql2 = `update education_details set sscboard='${boardArr[j]}' , spassingyear='${yearArr[j]}' , spercentage='${perArr[j]}' where educationid = '${eduArr[j]}'`;
        }
        else
        {
            sql2 = `insert into education_details (employeeid,sscboard, spassingyear, spercentage) VALUES ('${userId}','${boardArr[j]}','${yearArr[j]}','${perArr[j]}')`;
        }
        console.log(sql2);
        con.query(sql2 ,(err, data)=>{
            console.log(j);
            if(err) throw err;
            console.log(data.affectedRows + "Education records updated");
        })
    }
      //////work experience 
    for(var i=0;i<companyNameArr.length;i++)
      {
        var sql3;
        if(cidArr[i] != '')
        {
            sql3 = `update work_experience set company_name='${companyNameArr[i]}' , Designation='${companyDesigArr[i]}' ,
             from_date='${companyFromArr[i]}' , to_date='${companyToArr[i]}' where experienceid = '${cidArr[i]}'`;
        } 
        else{
            sql3 = `insert into work_experience (employeeid, company_name, Designation, from_date, to_date) VALUES ('${userId}','${companyNameArr[i]}',
                    '${companyDesigArr[i]}','${companyFromArr[i]}','${companyToArr[i]}')`; 
        }
        
        console.log(sql3);
        con.query(sql3 ,function(err, data){
            if(err) throw err;
            console.log(data.affectedRows + "experience records updated");
        })
      } 
          ////Reference contact
          for(var i=0;i<refNameArr.length;i++)
          {
            var query;
            if(refArr[i] != '')
            {
                var query = `update reference_contact set ref_name='${refNameArr[i]}' , contact='${refNumArr[i]}',
                relation='${refRelationArr[i]}' where referenceid = '${refArr[i]}'`;
            }
            else
            {
                query = `insert into reference_contact (employeeid, ref_name, contact, relation) VALUES ('${userId}','${refNameArr[i]}',
              '${refNumArr[i]}','${refRelationArr[i]}')`;
            }
              con.query(query, function(err, data){
                  if(err) throw err;     
              })    
          }
          console.log("reference updated successfully");

          //preferences
          var sql5 = `update preferences set preferred_location='${location}' , notice_period='${noticeP}' , expected_ctc='${expectedCTC}' , current_ctc='${currentCTC}' , department='${department}' where employeeid = '${userId}'`;
          console.log(sql5);
          con.query(sql5 ,function(err, data){
          if(err) throw err;
          console.log(data.affectedRows + "Prefernces records updated");
      })

        ////language known
        let {tidArr,lidArr} = dataInsert;
   for(let i=0;i<arrlangKnown.length;i++)
   {
    let condition=Object.keys(arrlangKnown[i]).length;

    if(condition > 0)
    {
    let val = Object.keys(arrlangKnown[i])[0];
    let valArr = arrlangKnown[i][val];
    if(lidArr[i] != "")
    {
        let update6 = `update langKnown set lang_name='${val}', can_read='${valArr[0]}', can_write='${valArr[1]}', can_speak='${valArr[2]}' where langId = '${lidArr[i]}'`;
        con.query(update6,(err,result)=>{
            if(err) throw err;
            console.log(result);
        })
    }
    else if(lidArr[i] === "")
    {
        let update6 = `insert into langKnown(employeeid, lang_name, can_read, can_write, can_speak) values ('${userId}','${val}','${valArr[0]}','${valArr[1]}','${valArr[2]}')`;
        con.query(update6,(err,result)=>{
            if(err) throw err;
            console.log(update6);
            console.log(result);
        })
    }

    }
    
   }

   ////technology known
   for(let i=0;i<techKnown.length;i++)
   {
    let condition=Object.keys(techKnown[i]).length;
    if(condition > 0)
    {
    let val = Object.keys(techKnown[i])[0];
    let level = techKnown[i][val];
    if(tidArr[i] != "")
    {
        let update7 = `update tech_known set tech_name='${val}',level='${level}' where langId='${tidArr[i]}'`;
        con.query(update7,(err,result)=>{
            if(err) throw err;
            console.log(result);
        })
    }
    else if(tidArr[i] === "")
    {
        let update7 =  `insert into tech_known (employeeid,tech_name,level) values ('${userId}','${val}','${level}')`;
        con.query(update7,(err,result)=>{
            if(err) throw err;
            console.log(result);
        })
    }
    }
   }
   res.redirect('/data')
}
else{
    const sql = `insert into basic_detail(firstname, lastname, designation, email, phone, gender, relation, add1, add2, city, state, zipcode, dob ) 
        values("${fname}","${lname}","${desig}","${emailid}","${Pnumber}","${gendervalue}","${statusRelation}","${address}",
       "${add2}","${city}","${state}","${zipcode}","${dob}")`;
        con.query(sql ,function(err, data){
            if(err) throw err;
            idmain=data.insertId;
            console.log(idmain);
            ////education
            console.log("length: "+boardArr);
            for(var i=0;i<boardArr.length;i++)
            {
                // console.log(formData[i].SPassYear);
                console.log(idmain);
                var query = `insert into education_details (employeeid,sscboard, spassingyear, spercentage) VALUES ('${idmain}','${boardArr[i]}','${yearArr[i]}','${perArr[i]}')`;
                con.query(query, function(err, data){
                    if(err) throw err; 
                })
            }
            
            ////work experience
            for(var j=0;j<companyNameArr.length;j++)
                    {
                    var query1 = `insert into work_experience (employeeid, company_name, Designation, from_date, to_date) VALUES ('${idmain}','${companyNameArr[j]}',
                    '${companyDesigArr[j]}','${companyFromArr[j]}','${companyToArr[j]}')`;
                    con.query(query1, function(err, data){
                               if(err) throw err;
                           })
                    } 
            ////language known
            
            for(let i=0;i<arrlangKnown.length;i++)
            {
                let condition = Object.keys(arrlangKnown[i]).length;
                if(condition > 0)
                {
                let val = Object.keys(arrlangKnown[i])[0];
                console.log("val: " + val);
                let valArr = arrlangKnown[i][val];
                let query2 = `insert into langKnown(employeeid, lang_name, can_read, can_write, can_speak) values ('${idmain}','${val}','${valArr[0]}','${valArr[1]}','${valArr[2]}')`;
            
                con.query(query2,(err,result)=>
                {
                    if(err) throw err;
                    else
                    {
                        console.log(result);
                    }
                })
            }
            }

            ////technology known
            for(let i=0;i<techKnown.length;i++)
            {
                let condition = Object.keys(techKnown[i]).length;
                if(condition > 0)
                {
                let val = Object.keys(techKnown[i])[0];
                let level = techKnown[i][val];
                let query2 = `insert into tech_known (employeeid,tech_name,level) values ('${idmain}','${val}','${level}')`
            
                con.query(query2,(err,result)=>
                {
                    if(err) throw err;
                    else
                    {
                        console.log(result);
                    }
                })

            }
            }
         
          //////reference
            for(var i=0;i<refNameArr.length;i++)
            {
                var query = `insert into reference_contact (employeeid, ref_name, contact, relation) VALUES ('${idmain}','${refNameArr[i]}',
                '${refNumArr[i]}','${refRelationArr[i]}')`;
                con.query(query, function(err, data){
                    if(err) throw err;     
                })    
            }
            console.log("user reference data is inserted successfully");
            /////preferences
            let {location,noticeP,expectedCTC,currentCTC,department} = dataInsert;
            var query4 = `insert into preferences (employeeid, preferred_location, notice_period, expected_ctc, current_ctc, department) values
            ('${idmain}','${location}','${noticeP}','${expectedCTC}','${currentCTC}','${department}')`;
            con.query(query4, function(err, data){
                if(err) throw err;  
                  
            })   
        })
        res.redirect('/data');    
}

})

app.get('/data',function(req,res){
con.query(`select id,firstname, lastname, designation, email, phone, gender, relation,DATE_FORMAT(dob,'%m/%d/%y') as dob from basic_detail`,
 function(err, result){
    if(err) throw err;
    // console.log(result);
    res.render('Task15/data.ejs',{users: result});
});
});

//update employee
app.get('/form/update/:id', function(req,res){
var userId = req.params.id;
if(userId){
var sql = `select * from basic_detail where id = '${userId}'`;
con.query(sql , function(err , data1){
    if(err) throw err;
    // console.log(data1);
    ////education
    var sql2 = `select * from education_details where employeeid = '${userId}'`;
    con.query(sql2 , function(err , data2){
        if(err) throw err;
        ////experience
        var sql3 = `select * from work_experience where employeeid = '${userId}'`;
        con.query(sql3 , function(err , data3){
            if(err) throw err;
            // console.log(data);
            // console.log(data3);
                // ////language known
            var sql4 = `select * from langKnown where employeeid = '${userId}'`;
            con.query(sql4 , function(err , data4){
                if(err) throw err;
                 // //// reference
                var sql6 = `select * from reference_contact where employeeid = '${userId}'`;
                con.query(sql6 , function(err , data5){
                    if(err) throw err;
                    // console.log(data);
                        // ////tech known
                        var sql5 = `select * from tech_known where employeeid = '${userId}'`;
                        con.query(sql5 , function(err , data6){
                            if(err) throw err;
                            var sql7 = `select * from preferences where employeeid = '${userId}'`;
                        con.query(sql7 , function(err , result7){
                            if(err) throw err;
                            // console.log(data7);
                            res.render('Task15/form.ejs',{data : data2,data1:data1[0], data3:data3, data4:data4 , data5:data5,data6:data6,data7:result7[0],i:0,j:0})
                            console.log(result7);
                            // console.log(data);  
                        })
                            // console.log(data6);
                            // console.log(data);
                        })
                })
            })      
        })
    })
});

}
})



app.listen(9098);