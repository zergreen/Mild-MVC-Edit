const mysql = require("mysql");

//เชื่อมดาต้าเบส
const connect = mysql.createConnection({
  host: "localhost",
  database: "cpudb",
  port: 3306,
  user: "root",
  password: "admin",
});

connect.connect((err) => {
  if (err) {
    console.log("Error connect to database!! \n AT : " + err);
  } else {
    console.log("Connect to Database Success!");
  }
});
module.exports = connect;
