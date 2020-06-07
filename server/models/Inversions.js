const mongoose = require('mongoose');


const Schema =  mongoose.Schema;

const InversionSchema = new Schema({
	title:{
		type:String,
		required:true
	},
	type:{
		type:String,
		required:true
	},
	description:{
		type:String,
		required:true
	},
	LastUpdateTimeStamp:{
		type:Date
	},
	LastEditBy:{
		type:String,
		required:true
	},
	Fields:{
		type:String,
		required:true
	},
}, {timestamps:true});

module.exports = mongoose.model('Inversions',InversionSchema);

