//task15
var con = require("../connection/connection");
const crud_ajax_task15 = async (req, res) => {
    res.render('Task15_crud ajax/form.ejs', { data: null, data1: null, data2: null, data3: null, data4: null, data5: null, data6: null, data7: null, i: 0, j: 0 });
};

const saving_ajax = async (req, res) => {
    console.log(req.body);
    let dataInsert = req.body;
    let { id } = dataInsert
    let { eduArr } = dataInsert;
    let { cidArr } = dataInsert;
    let { arrlangKnown } = dataInsert;
    let { techKnown } = dataInsert;
    let userId = id;
    const { fname, lname, desig, emailid, Pnumber, gendervalue, statusRelation, address, add2, city, state, zipcode, dob } = dataInsert;
    let { companyNameArr, companyDesigArr, companyFromArr, companyToArr } = dataInsert;
    let { refNameArr, refNumArr, refRelationArr } = dataInsert;
    let { boardArr, yearArr, perArr } = dataInsert;
    let { refArr } = dataInsert;
    let { location, noticeP, expectedCTC, currentCTC, department } = dataInsert;

    if (userId) {
        ///basic details
        var sql = `update basic_detail set firstname='${fname}' , lastname='${lname}' , designation='${desig}' , email='${emailid}' , phone='${Pnumber}' , gender='${gendervalue}'
    , relation='${statusRelation}' , add1='${address}' , add2='${add2}' , city='${city}' , state='${state}' , zipcode='${zipcode}' , dob='${dob}'  where id = '${userId}'`;
        con.query(sql, function (err, data) {
            if (err) throw err;
            console.log(data.affectedRows + "Basic records updated");
        })
        ////education
        for (let j = 0; j < boardArr.length; j++) {
            var sql2
            if (eduArr[j] != '') {
                sql2 = `update education_details set sscboard='${boardArr[j]}' , spassingyear='${yearArr[j]}' , spercentage='${perArr[j]}' where educationid = '${eduArr[j]}'`;
            }
            else {
                sql2 = `insert into education_details (employeeid,sscboard, spassingyear, spercentage) VALUES ('${userId}','${boardArr[j]}','${yearArr[j]}','${perArr[j]}')`;
            }
            console.log(sql2);
            con.query(sql2, (err, data) => {
                console.log(j);
                if (err) throw err;
                console.log(data.affectedRows + "Education records updated");
            })
        }
        //////work experience 
        for (var i = 0; i < companyNameArr.length; i++) {
            var sql3;
            if (cidArr[i] != '') {
                sql3 = `update work_experience set company_name='${companyNameArr[i]}' , Designation='${companyDesigArr[i]}' ,
             from_date='${companyFromArr[i]}' , to_date='${companyToArr[i]}' where experienceid = '${cidArr[i]}'`;
            }
            else {
                sql3 = `insert into work_experience (employeeid, company_name, Designation, from_date, to_date) VALUES ('${userId}','${companyNameArr[i]}',
                    '${companyDesigArr[i]}','${companyFromArr[i]}','${companyToArr[i]}')`;
            }

            console.log(sql3);
            con.query(sql3, function (err, data) {
                if (err) throw err;
                console.log(data.affectedRows + "experience records updated");
            })
        }
        ////Reference contact
        for (var i = 0; i < refNameArr.length; i++) {
            var query;
            if (refArr[i] != '') {
                var query = `update reference_contact set ref_name='${refNameArr[i]}' , contact='${refNumArr[i]}',
                relation='${refRelationArr[i]}' where referenceid = '${refArr[i]}'`;
            }
            else {
                query = `insert into reference_contact (employeeid, ref_name, contact, relation) VALUES ('${userId}','${refNameArr[i]}',
              '${refNumArr[i]}','${refRelationArr[i]}')`;
            }
            con.query(query, function (err, data) {
                if (err) throw err;
            })
        }
        console.log("reference updated successfully");

        //preferences
        var sql5 = `update preferences set preferred_location='${location}' , notice_period='${noticeP}' , expected_ctc='${expectedCTC}' , current_ctc='${currentCTC}' , department='${department}' where employeeid = '${userId}'`;
        console.log(sql5);
        con.query(sql5, function (err, data) {
            if (err) throw err;
            console.log(data.affectedRows + "Prefernces records updated");
        })

        ////language known
        let { tidArr, lidArr } = dataInsert;
        for (let i = 0; i < arrlangKnown.length; i++) {
            let condition = Object.keys(arrlangKnown[i]).length;

            if (condition > 0) {
                let val = Object.keys(arrlangKnown[i])[0];
                let valArr = arrlangKnown[i][val];
                if (lidArr[i] != "") {
                    let update6 = `update langKnown set lang_name='${val}', can_read='${valArr[0]}', can_write='${valArr[1]}', can_speak='${valArr[2]}' where langId = '${lidArr[i]}'`;
                    con.query(update6, (err, result) => {
                        if (err) throw err;
                        console.log(result);
                    })
                }
                else if (lidArr[i] === "") {
                    let update6 = `insert into langKnown(employeeid, lang_name, can_read, can_write, can_speak) values ('${userId}','${val}','${valArr[0]}','${valArr[1]}','${valArr[2]}')`;
                    con.query(update6, (err, result) => {
                        if (err) throw err;
                        console.log(update6);
                        console.log(result);
                    })
                }

            }

        }

        ////technology known
        for (let i = 0; i < techKnown.length; i++) {
            let condition = Object.keys(techKnown[i]).length;
            if (condition > 0) {
                let val = Object.keys(techKnown[i])[0];
                let level = techKnown[i][val];
                if (tidArr[i] != "") {
                    let update7 = `update tech_known set tech_name='${val}',level='${level}' where langId='${tidArr[i]}'`;
                    con.query(update7, (err, result) => {
                        if (err) throw err;
                        console.log(result);
                    })
                }
                else if (tidArr[i] === "") {
                    let update7 = `insert into tech_known (employeeid,tech_name,level) values ('${userId}','${val}','${level}')`;
                    con.query(update7, (err, result) => {
                        if (err) throw err;
                        console.log(result);
                    })
                }
            }
        }
        res.redirect('/data');
    }
    else {
        const sql = `insert into basic_detail(firstname, lastname, designation, email, phone, gender, relation, add1, add2, city, state, zipcode, dob ) 
        values("${fname}","${lname}","${desig}","${emailid}","${Pnumber}","${gendervalue}","${statusRelation}","${address}",
       "${add2}","${city}","${state}","${zipcode}","${dob}")`;
        con.query(sql, function (err, data) {
            if (err) throw err;
            idmain = data.insertId;
            console.log(idmain);
            ////education
            console.log("length: " + boardArr);
            for (var i = 0; i < boardArr.length; i++) {
                // console.log(formData[i].SPassYear);
                console.log(idmain);
                var query = `insert into education_details (employeeid,sscboard, spassingyear, spercentage) VALUES ('${idmain}','${boardArr[i]}','${yearArr[i]}','${perArr[i]}')`;
                con.query(query, function (err, data) {
                    if (err) throw err;
                })
            }

            ////work experience
            for (var j = 0; j < companyNameArr.length; j++) {
                var query1 = `insert into work_experience (employeeid, company_name, Designation, from_date, to_date) VALUES ('${idmain}','${companyNameArr[j]}',
                    '${companyDesigArr[j]}','${companyFromArr[j]}','${companyToArr[j]}')`;
                con.query(query1, function (err, data) {
                    if (err) throw err;
                })
            }
            ////language known

            for (let i = 0; i < arrlangKnown.length; i++) {
                let condition = Object.keys(arrlangKnown[i]).length;
                if (condition > 0) {
                    let val = Object.keys(arrlangKnown[i])[0];
                    console.log("val: " + val);
                    let valArr = arrlangKnown[i][val];
                    let query2 = `insert into langKnown(employeeid, lang_name, can_read, can_write, can_speak) values ('${idmain}','${val}','${valArr[0]}','${valArr[1]}','${valArr[2]}')`;

                    con.query(query2, (err, result) => {
                        if (err) throw err;
                        else {
                            console.log(result);
                        }
                    })
                }
            }

            ////technology known
            for (let i = 0; i < techKnown.length; i++) {
                let condition = Object.keys(techKnown[i]).length;
                if (condition > 0) {
                    let val = Object.keys(techKnown[i])[0];
                    let level = techKnown[i][val];
                    let query2 = `insert into tech_known (employeeid,tech_name,level) values ('${idmain}','${val}','${level}')`

                    con.query(query2, (err, result) => {
                        if (err) throw err;
                        else {
                            console.log(result);
                        }
                    })

                }
            }

            //////reference
            for (var i = 0; i < refNameArr.length; i++) {
                var query = `insert into reference_contact (employeeid, ref_name, contact, relation) VALUES ('${idmain}','${refNameArr[i]}',
                '${refNumArr[i]}','${refRelationArr[i]}')`;
                con.query(query, function (err, data) {
                    if (err) throw err;
                })
            }
            console.log("user reference data is inserted successfully");
            /////preferences
            let { location, noticeP, expectedCTC, currentCTC, department } = dataInsert;
            var query4 = `insert into preferences (employeeid, preferred_location, notice_period, expected_ctc, current_ctc, department) values
            ('${idmain}','${location}','${noticeP}','${expectedCTC}','${currentCTC}','${department}')`;
            con.query(query4, function (err, data) {
                if (err) throw err;

            })
        })
        res.redirect('/data');
    }
    // res.redirect('/data')
}

const get_all_records = async (req, res) => {
    con.query(`select id,firstname, lastname, designation, email, phone, gender, relation,DATE_FORMAT(dob,'%m/%d/%y') as dob from basic_detail`,
        function (err, result) {
            if (err) throw err;
            // console.log(result);
            res.render('Task15_crud ajax/data.ejs', { users: result });
        });
};

//update employee
const update_user = async (req, res) => {
    var userId = req.params.id;
    if (userId) {
        var sql = `select * from basic_detail where id = '${userId}'`;
        con.query(sql, function (err, data1) {
            if (err) throw err;
            // console.log(data1);
            ////education
            var sql2 = `select * from education_details where employeeid = '${userId}'`;
            con.query(sql2, function (err, data2) {
                if (err) throw err;
                ////experience
                var sql3 = `select * from work_experience where employeeid = '${userId}'`;
                con.query(sql3, function (err, data3) {
                    if (err) throw err;
                    // console.log(data);
                    // console.log(data3);
                    // ////language known
                    var sql4 = `select * from langKnown where employeeid = '${userId}'`;
                    con.query(sql4, function (err, data4) {
                        if (err) throw err;
                        // //// reference
                        var sql6 = `select * from reference_contact where employeeid = '${userId}'`;
                        con.query(sql6, function (err, data5) {
                            if (err) throw err;
                            // console.log(data);
                            // ////tech known
                            var sql5 = `select * from tech_known where employeeid = '${userId}'`;
                            con.query(sql5, function (err, data6) {
                                if (err) throw err;
                                var sql7 = `select * from preferences where employeeid = '${userId}'`;
                                con.query(sql7, function (err, result7) {
                                    if (err) throw err;
                                    // console.log(data7);
                                    res.render('Task15_crud ajax/form.ejs', { data: data2, data1: data1[0], data3: data3, data4: data4, data5: data5, data6: data6, data7: result7[0], i: 0, j: 0 })
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
}

module.exports = { crud_ajax_task15, saving_ajax, get_all_records, update_user }
