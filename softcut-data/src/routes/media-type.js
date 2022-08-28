const express = require('express');
const router = express.Router();
const database = require('../database/connection');
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();

router.get('/getMediaTypes', (req, res) => {
	database.query('Select * From media_type', function (err, result) {
		res.send(result);
	});
});

router.post('/createMediaType', jsonParser, (req, res) => {
	const name = req.body.name;
	const description = req.body.description;
	var query = 'Insert Into media_type (name, description) values (\'' + name + '\', \'' + description + '\')'
	database.query(query);
	res.send();
});

router.delete('/deleteMediaType', jsonParser, (req, res) => {
	const id = req.body.id;
	var query = 'Delete From media_type Where id = ' + id;
	database.query(query);
	res.send();
});

module.exports = router;