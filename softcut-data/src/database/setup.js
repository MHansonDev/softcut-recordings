const express = require('express');
const router = express.Router();
const database = require('./connection');
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();

router.get('/setup', (req, res) => {
	database.query('Select * From genre', function (err, result) {
		res.send(result);
	});
});

module.exports = router;