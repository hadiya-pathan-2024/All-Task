//task12 
var con = require("../connection/connection");
const search_name_task12 = async (req, res) => {
    console.log(req.query)
    var currentPage = + req.query.page || 1;
    var pageSize = 20;
    var offset = (currentPage - 1) * pageSize;
    // const month = req.query.month || "december";
    // const year = req.query.year || "2023";
    select = req.query.select || "2023-12-30";
    arr = select.split("-");
    var id = req.query.studentId || " ";
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
            if (err) {
                console.log(err);
                res.send("wrong")
            } else {
                const lastIndex = Math.floor(200 / 10);
                res.render('Task12_search name/search.ejs', {
                    data: result,
                });
            }
        })
};

module.exports = { search_name_task12 };
