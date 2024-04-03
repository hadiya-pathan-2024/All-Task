//Task11
var con = require("../connection/connection");
const dynamic_task11 = async (req, res) => {
    const pageSize = 10;
    const currentPage = + req.query.page || 1;
    let offset = (currentPage - 1) * pageSize;
    let finalQuery;
    // const lastIndex = 20;
    const query1 = req.query.query || "select * from student_master";
    let arr = query1.split(" ");
    let position = arr.indexOf("limit");
    if (arr.includes("limit")) {
        offset = (currentPage - 1) * arr[position + 1]
        finalQuery = `${query1} offset ${offset}`
    }
    else {
        finalQuery = `${query1} limit 10 offset ${offset}`
    }
    console.log(query1);


    con.query(finalQuery, (err, result) => {
        if (err) {
            // console.log("data not found");
            res.render("Task11_dynamic tables/invalid.ejs", { errorDisplay: "invalid query" });
        }
        else {
            if (result.length == 0) {
                res.render("Task11_dynamic tables/invalid.ejs", { errorDisplay: "No data found" })
            }
            else {
                let key = Object.keys(result[0]);
                console.log(key);
                res.render("Task11_dynamic tables/dynamicData.ejs", {
                    result, key,
                    page: currentPage,
                    nextPage: currentPage + 1,
                    prevPage: currentPage - 1,
                    lastPage: Math.ceil(200 / pageSize),
                    hasNextPage: (pageSize * currentPage) < 200,
                    hasPreviousPage: currentPage > 1,
                    // lastIndex:lastIndex,
                    finalQuery: query1,
                })
            }
        }

    })
};

module.exports = { dynamic_task11 }