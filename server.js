// requiring dependencies

const express = require('express');
const MongoClient = require('mongodb').MongoClient ;
const bodyParser = require('body-parser');
const db = require('./config/db');
// initializing app as instance of express

const app = express();

// tell app to start listening for HTTP requests

const port = 8000;

// parse url enconded forms
app.use(bodyParser.urlencoded({ extended: true }));


// connect to database
MongoClient.connect(db.url, (err, database) => {
	if (err) return console.log(err)

	require('./app/routes')(app, database)
	// start port
	app.listen(port,() => {
		console.log('We are live on port' + port);
	});

})
