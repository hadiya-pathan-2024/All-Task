//task9
var con = require("../connection/connection");
const attendance_task9 = async (req, res) => {
    console.log(req.query)
    var currentPage = + req.query.page || 1;
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
            if (err) {
                console.log(err);
                res.send("wrong")
            } else {
                const lastIndex = Math.floor(200 / 10);
                res.render('Task9_attendance/attendance_report.ejs', {
                    data: result,
                    page: currentPage,
                    nextPage: currentPage + 1,
                    prevPage: currentPage - 1,
                    lastPage: Math.ceil(200 / pageSize),
                    hasNextPage: (pageSize * currentPage) < 200,
                    lastIndex: lastIndex,
                    hasPreviousPage: currentPage > 1,
                    month: Number(`${arr[1]}`),
                    select: select,
                    days: Number(`${arr[2]}`),
                });
            }
        })
}

module.exports = { attendance_task9 }