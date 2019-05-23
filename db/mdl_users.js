const mongoose = require('mongoose');
const shortid = require('shortid');
const userSchema = mongoose.Schema({
	_id:{
		type:String,
		required:true,
		default:shortid.generate
	},
	name:{type:String,required:true},
	email:{type:String},
	password:{type: String},
	role:{type:String, default:'user'},
},{collection:'users'}); // avoid auto create module. that's fuck.
const usersModel = module.exports = mongoose.model('users', userSchema);
//add user
module.exports.addUser = function(data, callback){
	usersModel.create(data, callback);
}
// find one
module.exports.findOneWhere = function(data, callback){
	usersModel.findOne(data, callback);
}
// get name, img
module.exports.profile = function(data, callback){
	usersModel.findOne(data, {name:1, profile_image:1}, callback);
}
// find all
module.exports.findAll = function(query, get, sort, page, callback){
	const perPage =24;
	const skip = page > 0 ?((page -1 )* perPage) : 0;
	usersModel.find(query, get, callback).sort(sort).skip(skip).limit(perPage+1);
}
// find limit.
module.exports.findAll1 = function(query, get, sort, limit, callback){
	usersModel.find(query, get, callback).sort(sort).limit(limit);
}
//find no findLimit
module.exports.findLimit = function(query, get, limit, callback){
	usersModel.find(query, get, callback);
}
// update
module.exports.update = function(id, data, callback){
	const query ={_id:id};
	usersModel.findOneAndUpdate(query, data, callback);
}
//total user
module.exports.count_user = function(query, callback){
	usersModel.count(query, callback);
}
// remove
module.exports.delete = function(query, callback){
	usersModel.remove(query, callback);
}
module.exports.count_group = function(query, callback){
	usersModel.aggregate([
    {"$group" : {_id:"$role", count:{$sum:1}}}
  ], callback)
}
