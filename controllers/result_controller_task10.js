//task10
var con = require("../connection/connection");

const result_task10 = async (req, res) => {
    console.log(req.query)
    var currentPage = + req.query.page || 1;
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
            if (err) {
                console.log(err);
                res.send("wrong")
            } else {
                const lastIndex = Math.floor(200 / 10);
                res.render('Task10_result/result.ejs', {
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
};

const view_task10 = async (req, res) => {
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
    con.query(sql, function (err, results) {
        let queryAtt = `select count(studentId) as att from attendance_master where attendance_master.record="Present" and studentId = ${userId}`;
        con.query(queryAtt, function (err, result2) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(result2);
                console.log(results);
            }
            res.render('Task10_result/view.ejs', {
                view: results,
                atten: result2,
                totalMarks: 0,
            }
            );
        })
    })
};

module.exports = { result_task10, view_task10 }
