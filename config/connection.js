var mysql = require("mysql");

var connection = mysql.createConnection({
	host: 'wvulqmhjj9tbtc1w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	port: 3306,
	user:'x63jxhp19sc1k8pp',
	password:'dg6y2esrihqa8zun',
	database: 'x23yl6pjlul10ex0'

});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;