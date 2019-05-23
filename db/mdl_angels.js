const mongoose = require('mongoose');
const shortid = require('shortid');
const angelSchema = mongoose.Schema({
  _id: {type: String,required: true,default: shortid.generate},
  name: { type: String, required: true },
  order: { type: Date, default: Date.now },
  age: { type: String, required: true },
  bra: { type: String, required: true },
  height: { type: Number, required: true },
  service: { type: String, required: true },
  rate: { type: String, required: true },
  note: { type: String },
  public: { type: Boolean, required: true, default: true },
  profile: { type: String, default: 'default-angels.jpg' },
  images: { type: Array, default: [] },
  date: { type: Date, default: Date.now }
}, { collection: 'angels' }); // avoid auto create modle. that's fuck.
const angelsModel = module.exports = mongoose.model('angels', angelSchema);
//add u
module.exports.add = function (data, callback) {
  angelsModel.create(data, callback);
}
// find one
module.exports.findOneWhere = function (data, callback) {
  angelsModel.findOne(data, callback);
}
// get name, img
module.exports.profile = function (data, callback) {
  angelsModel.findOne(data, { name: 1, profile_image: 1 }, callback);
}
// find all
module.exports.findAll = function (query, get, sort, page, callback) {
  const perPage = 24;
  const skip = page > 0 ? ((page - 1) * perPage) : 0;
  angelsModel.find(query, get, callback).sort(sort).skip(skip).limit(perPage + 1);
}
// find limit.
module.exports.findAll1 = function (query, get, sort, limit, callback) {
  angelsModel.find(query, get, callback).sort(sort).limit(limit);
}
//find no findLimit
module.exports.findLimit = function (query, get, limit, callback) {
  angelsModel.find(query, get, callback);
}
// update
module.exports.update = function (query, data, callback) {
  if(data._id){
    delete data._id;
  }
  angelsModel.findOneAndUpdate(query, data, callback);
}
//total user
module.exports.count_user = function (query, callback) {
  angelsModel.count(query, callback);
}
// remove
module.exports.delete = function (query, callback) {
  angelsModel.remove(query, callback);
}
module.exports.count_group = function (query, callback) {
  angelsModel.aggregate([
    { "$group": { _id: "$role", count: { $sum: 1 } } }
  ], callback)
}
