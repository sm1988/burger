// Set up MySQL connection.
var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection({
    host: "d6vscs19jtah8iwb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "yhbl74n1dgc3ztyn",
    password: "xbr5mlqpgckr64a5",
    database: "nc0giyz9n76beh29"
  });
} ;

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
  
// Export connection for our ORM to use.
module.exports = connection;
