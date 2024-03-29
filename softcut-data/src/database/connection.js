const mysql = require('mysql')

console.log('Connecting to MYSQL...')
var connection = mysql.createConnection({
	// host: 'localhost',
	host: 'mysql', // Docker
	port: '3306',
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