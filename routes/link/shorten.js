const linkHandler = require("../../models/database/handlers/link.handler")

module.exports = function(app) {
	app.post('/shorten', async (req, res) => { /* TODO: Найти более удобный метод делать это*/
		let url = String(req.query.url)
		let createRes = await linkHandler.addLink(url)
		return res.send(createRes)
	});
}