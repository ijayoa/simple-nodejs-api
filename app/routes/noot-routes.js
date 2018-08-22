var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db){
	// route to retrieve noot from collection
	app.get('/noots/:id', (req, res) =>{
		const id = req.params.id
		const data = { '_id': new ObjectID(id) };
		db.collection('noots').findOne(data, (err, item) => {
			if (err) {
				res.send({'error':'an error has occurred'});
			} else {
				res.send(item);
			}
		});
	});

	// route to delete noot from collection
	app.delete('/noots/:id', (req, res) => {
		const id = req.params.id
		const data = { '_id': new ObjectID(id) };
		db.collection('noots').remove(data, (err, item)=> {
			if (err) {
				res.send({'error':'An error has occurred'})
			} else {
				res.send('Noot ' + id + ' deleted sucessfully!')
			}
		});
	});

	// route to update a noot in a collection
	app.put('/noots/:id', (req, res) => {
		const id = req.params.id
		const data = { '_id': new ObjectID(id) };
		const noot = { title: req.body.title, text: req.body.text };
		db.collection('noots').update(data, noot, (err, results) => {
			if (err) {
				res.send({'error':'An error has occurred'});
			} else {
				res.send('Update sucessfull --- ' + noot);
			}
		});
	});

	// create a new noot in a collection
	app.post('/noots', (req, res) => {
		// you'll create your note
		db.collection('noots');
		// store entered via route paramaters
		const noot = { text: req.body.text, title: req.body.title};
		//insert data into collection, send response on error or success
		db.collection('noots').insert(noot, (err, results) => {
			if (err) {
				res.send({ 'error': 'An error has occurred'});
			}else {
				res.send(results.ops[0]);
			}
		});
	});
};
