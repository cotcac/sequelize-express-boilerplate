const mdl = require('../../db/mdl_contact');
module.exports = function(req, res){
  const id = req.query.id;
  mdl.delete({_id:id}, (err, result)=>{
    if(err) res.status(500).json(err);
    res.status(200).json(result);
  })
}
