const crypto = require('crypto');

module.exports = function(lenght) {
	const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
	let res = ""
	for (let i = 0; i < lenght; i++) {
		res += chars[Math.floor(Math.random() * chars.length)]
	}
	return res
}