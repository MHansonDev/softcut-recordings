const express = require('express');
const router = express.Router();
const database = require('../database/connection');
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();

router.get('/getAudioByGenre', (req, res) => {
	let genreId = req.query.genreId;
	database.query('Select * From audio Where genre = ' + genreId, function (err, result) {
		res.send(result);
	});
});

module.exports = router;