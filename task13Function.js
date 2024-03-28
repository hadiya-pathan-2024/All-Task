function strReturn(string1){
    let arr = ['_','^',':','$']

    let firstName = [];
    let lastName = [];
    let emailId = [];
    let City = [];
    let str="";
    let ch;
    let result=false;
    let special;

    for(let i=0;i<string1.length;i++){
        ch = string1.charAt(i);

        if(arr.includes(ch)===true){
            result=true;
            if(special==="_"){
                firstName.push(str)
            }
            if(special==="^"){
                lastName.push(str)
            }
            if(special===":"){
                emailId.push(str)
            }
            if(special==="$"){
                City.push(str)
            }
            special=ch;
            str="";
        }
        else{
            result=false;
        }
        if(result===false){
            str+=ch;
            if(i==string1.length-1){
                if(special==='_'){
                    firstName.push(str)
                }
                if(special==="^"){
                    lastName.push(str)
                }
                if(special===":"){
                    emailId.push(str)
                }
                if(special==="$"){
                    City.push(str)
                }
            }
        }
    }
let fname="";
let lname="";
let email="";
let city="";

for(let i=0;i<firstName.length;i++){
    if(i==0 && firstName.length>1){
        fname+=`(firstName LIKE '%${firstName[i]}%' or `
    }
    else if(i==0 && firstName.length==1){
        fname+=`(firstName LIKE '%${firstName[i]}%')`  
    }
    else if(i=== firstName.length-1){
        fname+=`firstName LIKE '%${firstName[i]}%')`  
    }
    else{
        fname+=`firstName LIKE '%${firstName[i]}%' or `
    }
}
for(let i=0;i<lastName.length;i++){
    if(i==0 && lastName.length>1){
        lname+=`(lastName LIKE '%${lastName[i]}%' or `
    }
    else if(i==0 && lastName.length==1){
        lname+=`(lastName LIKE '%${lastName[i]}%')`  
    }
    else if(i=== lastName.length-1){
        lname+=`lastName LIKE '%${lastName[i]}%')`  
    }
    else{
        lname+=`lastName LIKE '%${lastName[i]}%' or `
    }
}
for(let i=0;i<emailId.length;i++){
    if(i==0 && emailId.length>1){
        email+=`(emailId LIKE '%${emailId[i]}%' or `
    }
    else if(i==0 && firstName.length==1){
        email+=`(emailId LIKE '%${emailId[i]}%')`  
    }
    else if(i=== firstName.length-1){
        email+=`emailId LIKE '%${emailId[i]}%')`  
    }
    else{
        email+=`emailId LIKE '%${emailId[i]}%' or `
    }
}
for(let i=0;i<City.length;i++){
    if(i==0 && City.length>1){
        city+=`(City LIKE '%${City[i]}%' or `
    }
    else if(i==0 && firstName.length==1){
        city+=`(City LIKE '%${City[i]}%')`  
    }
    else if(i=== firstName.length-1){
        city+=`City LIKE '%${City[i]}%')`  
    }
    else{
        city+=`City LIKE '%${City[i]}%' or `
    }
}
let option1="";
let option2="";
let option3="";
if(lastName.length>0){
    option1="and"
}
if(emailId.length>0){
    option2="and"
}
if(City.length>0){
    option3="and"
}
let finalQuery = `select firstName,lastName ,DATE_FORMAT(DOB ,'%m/%d/%y') as DOB ,contactNum,emailId, City
 from student_master_5000Records where ${fname} ${option1} ${lname} ${option2} ${email} ${option3} ${city}`;
 console.log(finalQuery);
 return finalQuery;
}

module.exports={strReturn}