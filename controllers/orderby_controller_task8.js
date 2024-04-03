var con = require("../connection/connection");

const orderby_task8 = async (req, res) => {

    console.log(req.query)
    var currentPage = + req.query.pages || 1;
    var pageSize = 10;
    var offset = (currentPage - 1) * pageSize;
    const sortCol = req.query.sort || 'firstName';
    const sortDirection = req.query.direction === 'desc' ? 'desc' : 'asc';
    console.log(sortCol)

    con.query(`select firstName,lastName ,DATE_FORMAT(DOB ,'%m/%d/%y') as DOB ,contactNum,emailId, Address, City, State, country, zipCode, bloodGroup,createdAt
     from student_master_5000Records ORDER BY ${sortCol} ${sortDirection}  limit ${pageSize} offset ${offset}`,
        (err, result) => {
            if (err) {
                console.log(err);
                res.send("wrong")
            } else {
                const total = result[0].total;
                const lastIndex = Math.floor(50000 / 10);
                console.log(currentPage, total)
                console.log((pageSize * currentPage) < total)
                res.render('Task8_sorting pagination/dataListing_orderBy', {
                    data: result,
                    page: currentPage,
                    nextPage: currentPage + 1,
                    prevPage: currentPage - 1,
                    lastPage: Math.ceil(50000 / pageSize),
                    hasNextPage: (pageSize * currentPage) < 50000,
                    lastIndex: lastIndex,
                    hasPreviousPage: currentPage > 1,
                    sortBy: sortCol,
                    sortDirection: sortDirection,
                    currentPage,
                    // sortOrder: sortOrder,
                    // sort: resultsSort,
                });
            }
        })
};

module.exports = { orderby_task8 }