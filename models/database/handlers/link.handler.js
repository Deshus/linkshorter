const linkModel = require("../models/link.model")
const isurl = require("is-url-http")
const randomString = require("../../util/randomString")

module.exports.addLink = async function(url) {
	if (isurl(url) === false) {
		return 400
	}
	async function createUniqueLink() {
		let random = randomString(5)
		let id = await linkModel.findById(random)
		if (!id) {
			return random
		} else {
			await createUniqueLink()
		}
	}
	let linkid = await createUniqueLink()

	let link = new linkModel({
		_id: linkid,
		url: url,
		clicks: 0
	});

	link.save((err) => {
		if (err) return 500
	});
	return linkid
}

module.exports.getLink = async function(id) {
	try {
		let link = await linkModel.findOne({ _id: id }).exec();
		return link
	} catch (e) {
		console.error(e);
	}
}
module.exports.addClick = async function(id) {
	let link = await linkModel.findOne({ _id: id }).exec();
	if (link) {
		let clicks = await linkModel.findOne({_id: id})
		let counter = clicks.clicks
		counter++
		await linkModel.updateOne({ _id: id }, { clicks: counter });
	}
}

module.exports.removeLink = async function(id) {
	await linkModel.deleteOne({ _id: id });
}
