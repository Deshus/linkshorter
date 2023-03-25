const link = require('./link/index')
const path = require('path');

module.exports = function(app) {
	link(app)
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, "../src/index.html"));
	});
}

