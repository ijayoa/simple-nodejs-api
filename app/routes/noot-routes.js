
// create route C in crud route
module.exports = function(app, db){
	const collection =
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
