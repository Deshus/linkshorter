const linkHandler = require("../../models/database/handlers/link.handler")

module.exports = function(app) {
	app.get('/:link', async (req, res) => {
		try {
			let url = String(req.params.link)
			let link = await linkHandler.getLink(url)
			if (!link) {
				return res.sendStatus(404)
			}
			await linkHandler.addClick(link._id)
			return res.redirect(link.url)
		} catch (e) {
			return res.sendStatus(500)
		}

	});
}