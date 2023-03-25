const linkHandler = require("../../models/database/handlers/link.handler")

module.exports = function(app) {
	app.get('/:link/clicks', async (req, res) => {
		try {
			let url = String(req.params.link)
			let link = await linkHandler.getLink(url)
			let clicks = link.clicks
			return res.send(""+clicks)
		} catch (e) {
			return res.sendStatus(500)
		}

	});
}