const mysql = require('mysql')

var connection = mysql.createConnection({
	host: '172.17.0.1',
	database: 'db',
	port: '3306',
	user: 'root',
	password: 'password'
})

connection.connect((error) => {
	if (error) {
		throw error;
	}
	else {
		console.log('MySQL Media Database Connection Successful')
	}
});

module.exports = connection;