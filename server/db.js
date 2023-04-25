var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "a",
  database: "tubes3_stima_user_password"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  // var sql = "CREATE TABLE users (Username VARCHAR(255), Password VARCHAR(255))"; // create a table named "users" with two columns
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table created");
  });
// });

function insertUser(username, password) {
  var sql = "INSERT INTO users (Username, Password) VALUES (\"" + username + "\", \"" + password + "\")";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
}

function register(username, password) {
  return new Promise((resolve, reject) => {
    var sql = "SELECT * FROM users WHERE Username = \"" + username + "\"";
    con.query(sql, function (err, result) {
      if (err) reject(err);
      console.log(result);
      if (result.length === 0) {
        console.log("Registering...");
        insertUser(username, password);
        resolve({success: true});
      } else {
        console.log("Username already exists");
        resolve({success: false});
      }
    });
  }); 
}

function login (username, password) {
  return new Promise((resolve, reject) => {
    var sql = "SELECT * FROM users WHERE Username = \"" + username + "\" AND Password = \"" + password + "\"";
    con.query(sql, function (err, result) {
      if (err) reject(err);
      console.log(result);
      if (result.length === 0) {
        console.log("Username or password is wrong");
        resolve({ success: false, message: "Username or password is wrong" });
      } else {
        console.log("Login successful");
        resolve({ success: true, message: "Login successful" });
      }
    });
  });
}

module.exports = { con, insertUser, register, login };