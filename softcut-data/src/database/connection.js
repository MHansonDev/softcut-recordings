const mysql = require('mysql')

console.log('Connecting to MYSQL...')
var connection = mysql.createConnection({
	host: '172.17.0.1',
	database: 'media',
	port: '3306',
	user: 'user',
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