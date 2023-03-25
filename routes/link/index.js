const getLink = require("./get")
const shortenLink = require("./shorten")
const clicks = require("./clicks")

module.exports = function(app) {
	getLink(app)
	shortenLink(app)
	clicks(app)
}