const mongoose = require('mongoose');
const shortid = require('shortid');
const contactSchema = mongoose.Schema({
	_id:{
		type:String,
		required:true,
		default:shortid.generate
	},
	name:{type:String,required:true},
	email:{type:String},
	message:{type: String},
	date: { type: Date, default: Date.now }
},{collection:'contact'}); // avoid auto create module. that's fuck.
const model = module.exports = mongoose.model('contact', contactSchema);
//add contact
module.exports.add = function(data, callback){
	model.create(data, callback);
}
// find one
module.exports.findOneWhere = function(data, callback){
	model.findOne(data, callback);
}

// find all
module.exports.findAll = function(query, get, sort, page, callback){
	const perPage =24;
	const skip = page > 0 ?((page -1 )* perPage) : 0;
	model.find(query, get, callback).sort(sort).skip(skip).limit(perPage+1);
}
// find limit.
module.exports.findAll1 = function(query, get, sort, limit, callback){
	model.find(query, get, callback).sort(sort).limit(limit);
}
//find no findLimit
module.exports.findLimit = function(query, get, limit, callback){
	model.find(query, get, callback);
}
// update
module.exports.update = function(id, data, callback){
	const query ={_id:id};
	model.findOneAndUpdate(query, data, callback);
}
//total user
module.exports.count_user = function(query, callback){
	model.count(query, callback);
}
// remove
module.exports.delete = function(query, callback){
	model.remove(query, callback);
}

