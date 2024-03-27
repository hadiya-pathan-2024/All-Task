var express = require('express');
var app = express();
app.set('view engine','ejs');
app.use(express.static('public'));
var mysql = require('mysql');
app.use(express.urlencoded({extended: false}))

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
app.get('/',function(req,res)
{
    res.render('Home');
})
//task1
app.get('/task1',function(req,res)
{
    res.render('Task1/Task1_AllEvents');
});
//task2
app.get('/task2',function(req,res)
{
    res.render('Task2/Task2_AddingRowCol');
})
//task3
app.get('/task3',function(req,res)
{
    res.render('Task3/Task3_kukukube');
})
//task4
app.get('/task4',function(req,res)
{
    res.render('Task4/Task4_tictactoe');
})
//task5
app.get('/task5',function(req,res)
{
    res.render('Task5/Task5_ehyaWebsite');
})
//task6
app.get('/task6',function(req,res)
{
    res.render('Task6/Website_awanHoster');
})
//task7
app.get('/task7',function(req,res)
{
    res.render('Task7/Website_Hirex');
})
//task8
app.get('/task8',function(req,res){
   
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
app.get('/task9',function(req,res)
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


app.listen(9090);