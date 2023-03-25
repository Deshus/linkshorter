const mongoose = require('mongoose');
const config = require("../../config/database.config.json");

const address = `mongodb://${config.ip}:${config.port}/${config.database}`

mongoose.connect(address, function (err) {
	if (err) throw err;
	console.log('Successfully connected');
});

mongoose.set('strictQuery', true); // TODO