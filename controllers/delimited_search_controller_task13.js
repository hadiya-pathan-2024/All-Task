//task13
var con = require("../connection/connection");
let func = require("../task13Function");
const delimited_search_task13 = async (req, res) => {
    let query1 = req.query.searchQuery || "";
    if(query1 === ""){
        res.render('Task13_delimited search/delimitedSearch.ejs', {
            query: query1,
            noQuery: 0
        });
    }
    else{
    let string1 = "select * from student_master_5000Records limit 10";
    if (query1 != "select * from student_master_5000Records limit 10") {
        string1 = query1;
    }
    if (query1 === "select * from student_master_5000Records limit 10") {

    } else {
        query1 = func.strReturn(string1);
    }

    con.query(query1,
        (err, result) => {
            if (err) {
                console.log(err);
                res.send("wrong")
            } else {
                res.render('Task13_delimited search/delimitedSearch.ejs', {
                    data: result,
                    query: string1,
                    noQuery: 1
                });
            
            }
        })
    }
};

module.exports = { delimited_search_task13 }