var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db){
	// route to retrieve entries from collection
	app.get('/noots/:id', (req, res) =>{
		const id = req.params.id
		const data = {'_id': new ObjectID(id) };
		db.collection('noots').findOne(data, (err, item) => {
			if (err) {
				res.send({'error':'an error has occurred'});
			} else {
				res.send(item);
			}
		});
	});

	// create route C in crud route
	app.post('/noots', (req, res) => {
		// you'll create your note
		db.collection('noots');
		// store entered via route paramaters
		const noot = { text: req.body.body, title: req.body.title};
		//insert data into collection, send response on error or success
		db.collection('noots').insert(noot, (err, results) => {
			if (err) {
				res.send({ 'error': 'An error has occured'});
			}else {
				res.send(results.ops[0]);
			}
		});
	});
};
