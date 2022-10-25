const mysql = require('mysql')

console.log('Connecting to MYSQL...')
var connection = mysql.createConnection({
	//host: 'localhost',
	host: '172.17.0.1', // Docker
	port: '3306', // Docker
	// user: 'user', // Docker
	user: 'root',
	password: 'password',
	database: 'media'
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