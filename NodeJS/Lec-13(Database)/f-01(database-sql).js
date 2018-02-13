const mysql=require('mysql2');
const  conn= mysql.createConnection({
    host: "localhost",
    database:"dbone",
    user:"userone",
    password:"passone"
});
conn.query('Select * from one',function(err,results,fields){
   if(err) throw err;
    console.log(results);
    console.log(results);
});
conn.close();

