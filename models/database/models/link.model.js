const mongoose = require("mongoose")

const linkSchema = new mongoose.Schema({
	_id: {type:String, required:true},
	url: {type:String, required:true},
	clicks: {type:Number, required:true, default:0}
});
module.exports = mongoose.model('link', linkSchema);