const express = require("express");
const app = express.Router();
const authentication = require("../middleware/authentication.js");
const { orderby_task8 } = require("../controllers/orderby_controller_task8.js");
const { attendance_task9 } = require("../controllers/attendance_controller_task9.js");
const { result_task10, view_task10 } = require("../controllers/result_controller_task10.js");
const { dynamic_task11 } = require("../controllers/dynamic_listing_tables_controllers_task11.js")
const { search_name_task12 } = require("../controllers/search_name_controller_task12.js");
const { delimited_search_task13 } = require("../controllers/delimited_search_controller_task13.js")
const { jsonplaceholder_task14, details } = require("../controllers/jsonplacehoder_controller_task14.js")
const { crud_ajax_task15, saving_ajax, get_all_records, update_user } = require("../controllers/crud_ajax_controller_task15.js")
const { crud_without_ajax_task16, get_all_records_without_ajax, update_user_without_ajax, update_function } = require("../controllers/crud_without_ajax_controller_task16.js")
const {all_events} = require("../controllers/all_events_controller_task1.js")
const {dynamic_row} = require("../controllers/dynamic_row_controller_task2.js")
const {ku_kube} = require("../controllers/ku_kube_controller_task3.js")
const {tic_tac} = require("../controllers/tic_tac_controller_task4.js")
const {ehya_web} = require("../controllers/ehya_web_controller_task5.js")
const {awan_web} = require("../controllers/awan_web_controller_task6.js")
const {hirex_web} = require("../controllers/hirex_web_controller_task7.js")
//task1
app.get('/task1', authentication,all_events)

// //task2
app.get('/task2', authentication, dynamic_row);

//task3
app.get('/task3', authentication,ku_kube )

//task4
app.get('/task4', authentication, tic_tac)

//task5
app.get('/task5', authentication,ehya_web)

//task6
app.get('/task6', authentication, awan_web)

//task7
app.get('/task7', authentication, hirex_web)

//task8
app.get('/task8', authentication, orderby_task8);

//task9
app.get('/task9',authentication, attendance_task9);

//task10
app.get('/task10',authentication, result_task10);
app.get('/view/:id',authentication, view_task10)

//task11
app.get('/task11',authentication, dynamic_task11);

//task12
app.get('/task12',authentication, search_name_task12);

//task13
app.get('/task13',authentication, delimited_search_task13)

//task14
app.get('/task14',authentication, jsonplaceholder_task14);
app.get('/details',authentication, details);

//task15
app.get('/task15',authentication, crud_ajax_task15);
app.post('/saveAjax',authentication, saving_ajax);
app.get('/data',authentication, get_all_records);
app.get('/update/:id',authentication, update_user)

//task16
app.get('/task16',authentication, crud_without_ajax_task16);
app.get('/dataTask16',authentication, get_all_records_without_ajax);
app.get('/task16/update/:id',authentication, update_user_without_ajax);
app.post('/update',authentication, update_function)
module.exports = app;