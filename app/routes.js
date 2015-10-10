module.exports = function(app) {

	var rest = require('restler');

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes


	app.post('/dash-plate-api', function(req, res) {
		rest.get("http://192.241.196.20:8080/plates/"+parseInt(req.body.numberPlate))
			.on('complete', function(data) {
                //Random data for chart
                value = data.calculatedValue;
                half_value = parseInt(value) / 2;
                timelineValues = [];
                for(var i =0; i < 5; i++){
                    timelineValues.push(randomInt(half_value, value));
                }
                timelineValues.push(parseInt(value));
                data.timelineValues = timelineValues;
                //Random data for chart
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

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
};