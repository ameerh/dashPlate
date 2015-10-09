module.exports = function(app) {

	var rest = require('restler');

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes


	app.get('/dash-plate-api', function(req, res) {
		rest.get("http://google.com")
			.on('complete', function(data) {
				res.send(data)
		})
			.on('error', function(err, response){
				res.send(err)
		});
	});


	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};