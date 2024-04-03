//task16
var con = require("../connection/connection");
const crud_without_ajax_task16 = async (req, res) => {
    res.render('Task16_crud simple/form.ejs', { data: null, data1: null, data2: null, data3: null, data4: null, data5: null, data6: null, data7: null, i: 0, j: 0 });
};

const get_all_records_without_ajax = async (req, res) => {
    con.query(`select id,firstname, lastname, designation, email, phone, gender, relation,DATE_FORMAT(dob,'%m/%d/%y') as dob from basic_detail`,
        function (err, result) {
            if (err) throw err;
            // console.log(result);
            res.render('Task16_crud simple/data.ejs', { users: result });
        });
};

//update employee
const update_user_without_ajax = async (req, res) => {
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
                                    res.render('Task16_crud simple/form.ejs', { data: data2, data1: data1[0], data3: data3, data4: data4, data5: data5, data6: data6, data7: result7[0], i: 0, j: 0 })
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
        })
    }
}

const update_function = async (req, res) => {
    var userId = req.body.id;
    var edu_id = req.body.edu_id;
    let counter = 0;
    var firstname = req.body.fname;
    var lastname = req.body.lname;
    var designation = req.body.desig;
    var email = req.body.emailid;
    var phone = req.body.Pnumber;
    var gender = req.body.gender;
    var relation = req.body.statusRelation;
    var add1 = req.body.add1;
    var add2 = req.body.add2;
    var city = req.body.city;
    var state = req.body.state;
    var zipcode = req.body.zipcode;
    var dob = req.body.dob;
    var countExperience = 0;
    var idmain;
    const SBoardName = req.body.SBoardName;
    const SPassYear = req.body.SPassYear;
    const MPerc = req.body.MPerc;
    const CName1 = req.body.CName1;
    const Desig1 = req.body.Desig1;
    const From1 = req.body.From1;
    const To1 = req.body.To1;
    console.log(dob)

    if (userId) {
        var sql = `update basic_detail set firstname='${req.body.fname}' , lastname='${req.body.lname}' , designation='${req.body.desig}' , email='${req.body.emailid}' , phone='${req.body.Pnumber}' , gender='${req.body.gender}'
    , relation='${req.body.statusRelation}' , add1='${req.body.add1}' , add2='${req.body.add2}' , city='${req.body.city}' , state='${req.body.state}' , zipcode='${req.body.zipcode}' , dob='${req.body.dob}'  where id = '${userId}'`;
        con.query(sql, function (err, data) {
            if (err) throw err;
            console.log(data.affectedRows + "Basic records updated");
        })
        ////education

        var count = 0;
        let { SBoardName, SPassYear, MPerc, edu_id } = req.body;
        let eduArr = [];
        console.log(SBoardName);
        for (let i = 0; i < SBoardName.length; i++) {
            console.log(SBoardName[i]);
            if (SBoardName[i] != 'select_course') {
                count++;
            }
            else {
                break;
            }
        }
        let boardArr = [];
        let yearArr = [];
        let perArr = [];
        for (let j = 0; j < count; j++) {
            boardArr.push(SBoardName[j])
            yearArr.push(SPassYear[j])
            perArr.push(MPerc[j]);
            eduArr.push(edu_id[j]);
        }
        console.log(count);
        console.log(boardArr);
        console.log(yearArr);
        console.log(perArr);

        // console.log(boardArr);
        for (let j = 0; j < count; j++) {
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
        let countExp = 0;
        let { cname, CName1, Desig1, From1, To1 } = req.body;
        let cidArr = [];
        for (let k = 0; k < CName1.length; k++) {
            if (CName1[k].value != '') {
                countExp++;
            }
            else {
                break;
            }
        }
        let companyNameArr = [];
        let companyDesigArr = [];
        let companyFromArr = [];
        let companyToArr = [];
        for (let z = 0; z < countExp; z++) {
            companyNameArr.push(CName1[z]);
            companyDesigArr.push(Desig1[z]);
            companyFromArr.push(From1[z]);
            companyToArr.push(To1[z]);
            cidArr.push(cname[z]);
        }
        for (var i = 0; i < count; i++) {
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
        // //language known

        ////Technology known

        //  ////Reference contact
        let countRef = 0;
        let { Cname, Cnum, relation, ref_id } = req.body;
        let refArr = [];

        for (let k = 0; k < Cname.length; k++) {
            if (Cname[k].value != '') {
                countRef++;
            }
            else {
                break;
            }
        }
        let refNameArr = [];
        let refNumArr = [];
        let refRelationArr = [];

        for (let z = 0; z < countRef; z++) {
            refNameArr.push(Cname[z]);
            refNumArr.push(Cnum[z]);
            refRelationArr.push(relation[z]);
            refArr.push(ref_id[z]);
        }
        for (var i = 0; i < countRef; i++) {
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
        ////preferences
        let { location, noticeP, expectedCTC, currentCTC, department } = req.body;
        var sql5 = `update preferences set preferred_location='${location}' , notice_period='${noticeP}' , expected_ctc='${expectedCTC}' , current_ctc='${currentCTC}' , department='${department}' where employeeid = '${userId}'`;
        console.log(sql5);
        con.query(sql5, function (err, data) {
            if (err) throw err;
            console.log(data.affectedRows + "Prefernces records updated");
        })

        res.redirect('/dataTask16')
    }
    else {
        var firstname = req.body.fname;
        var lastname = req.body.lname;
        var designation = req.body.desig;
        var email = req.body.emailid;
        var phone = req.body.Pnumber;
        var gender = req.body.gender;
        var relation = req.body.statusRelation;
        var add1 = req.body.add1;
        var add2 = req.body.add2;
        var city = req.body.city;
        var state = req.body.state;
        var zipcode = req.body.zipcode;
        var dob = req.body.dob;
        let count = 0;
        var idmain;
        const SBoardName = req.body.SBoardName;
        const SPassYear = req.body.SPassYear;
        const MPerc = req.body.MPerc;
        const CName1 = req.body.CName1;
        const Desig1 = req.body.Desig1;
        const From1 = req.body.From1;
        const To1 = req.body.To1;
        console.log(dob)

        const sql = `insert into basic_detail(firstname, lastname, designation, email, phone, gender, relation, add1, add2, city, state, zipcode, dob ) 
        values("${firstname}","${lastname}","${designation}","${email}","${phone}","${gender}",
        "${relation}","${add1}","${add2}","${city}","${state}","${zipcode}","${dob}")`;
        con.query(sql, function (err, data) {
            if (err) throw err;
            let id = data.insertId;
            idmain = data.insertId;
            console.log(idmain);
            // //education
            for (i = 0; i < SBoardName.length; i++) {
                if (SBoardName[i] != 'select_course') {
                    count++
                } else {
                    break;
                }
            }
            for (var i = 0; i < count; i++) {
                // console.log(formData[i].SPassYear);
                console.log(idmain);
                var query = `insert into education_details (employeeid,sscboard, spassingyear, spercentage) VALUES ('${idmain}','${SBoardName[i]}','${SPassYear[i]}','${MPerc[i]}')`;
                con.query(query, function (err, data) {
                    if (err) throw err;
                })
            }
            let countEx = 0;
            //////work experience 
            for (i = 0; i < CName1.length; i++) {
                if (CName1[i] != '') {
                    countEx++
                } else {
                    break;
                }
            }
            console.log("countEx" + countEx);
            for (var i = 0; i < countEx; i++) {
                var query1 = `insert into work_experience (employeeid, company_name, Designation, from_date, to_date) VALUES ('${idmain}','${CName1[i]}','${Desig1[i]}','${From1[i]}','${To1[i]}')`;
                con.query(query1, function (err, data) {
                    if (err) throw err;
                    console.log(id);
                })
            }
            //////lang known
            var data = req.body;
            if (data.english) {
                let isread = data.Read1 || "0";
                let iswrite = data.Write1 || "0";
                let isspeak = data.Speak1 || "0";
                let query2 = `insert into langKnown(employeeid, lang_name, can_read, can_write, can_speak) values ('${idmain}','english','${isread}','${iswrite}','${isspeak}')`;
                con.query(query2, function (err, data) {
                    if (err) throw err;
                    console.log("records inserted of language known")
                })
            }
            if (data.hindi) {
                let isread = data.Read2 || "0";
                let iswrite = data.Write2 || "0";
                let isspeak = data.Speak2 || "0";
                let query2 = `insert into langKnown(employeeid,lang_name, can_read, can_write, can_speak) values ('${idmain}','hindi','${isread}','${iswrite}','${isspeak}')`;
                con.query(query2, function (err, data) {
                    if (err) throw err;
                    console.log("records inserted of language known")
                })
            }
            if (data.gujarati) {
                let isread = data.Read3 || "0";
                let iswrite = data.Write3 || "0";
                let isspeak = data.Speak3 || "0";
                let query2 = `insert into langKnown(employeeid,lang_name, can_read, can_write, can_speak) values ('${idmain}','gujarati','${isread}','${iswrite}','${isspeak}')`;
                con.query(query2, function (err, data) {
                    if (err) throw err;
                    console.log("records inserted of language known")
                })
            }

            //////technology
            if (data.phpCheck) {
                let level1 = data.php;
                let query3 = `insert into tech_known (employeeid,tech_name,level) values ('${idmain}','php','${level1}')`
                con.query(query3, function (err, result) {
                    if (err) throw err;
                    // console.log(result)
                })
            }
            if (data.laravelCheck) {
                let level2 = data.laravel;
                let query3 = `insert into tech_known (employeeid,tech_name,level) values ('${idmain}','laravel','${level2}')`
                con.query(query3, function (err, result) {
                    if (err) throw err;
                    // console.log(result)
                })
            }
            if (data.mysqlCheck) {
                let level3 = data.mysql;
                let query3 = `insert into tech_known (employeeid,tech_name,level) values ('${idmain}','mysql','${level3}')`
                con.query(query3, function (err, result) {
                    if (err) throw err;
                    // console.log(result)
                })
            }
            if (data.oracleCheck) {
                let level4 = data.oracle;
                let query3 = `insert into tech_known (employeeid,tech_name,level) values ('${idmain}','oracle','${level4}')`
                con.query(query3, function (err, result) {
                    if (err) throw err;
                    // console.log(result)
                })
            }
            //////reference
            const Cname = req.body.Cname;
            const Cnum = req.body.Cnum;
            const Crelation = req.body.relation;
            let countRef = 0;
            for (i = 0; i < Cname.length; i++) {
                if (Cname[i] != '') {
                    countRef++
                } else {
                    break;
                }
            }
            for (var i = 0; i < countRef; i++) {
                var query = `insert into reference_contact (employeeid, ref_name, contact, relation) VALUES ('${idmain}','${Cname[i]}','${Cnum[i]}','${Crelation[i]}')`;
                con.query(query, function (err, data) {
                    if (err) throw err;
                })

            }
            console.log("user reference data is inserted successfully");
            console.log("Records added");

            /////preferences
            let { location, noticeP, expectedCTC, currentCTC, department } = req.body;
            var query4 = `insert into preferences (employeeid, preferred_location, notice_period, expected_ctc, current_ctc, department) values
                ('${idmain}','${location}','${noticeP}','${expectedCTC}','${currentCTC}','${department}')`;
            con.query(query4, function (err, data) {
                if (err) throw err;
            })
        })

        res.redirect('/dataTask16')

    }
}

module.exports = { crud_without_ajax_task16, get_all_records_without_ajax, update_user_without_ajax, update_function }
