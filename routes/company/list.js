module.exports = function(req, res){
    const mdl = require('../../db/mdl_company');
    mdl.findAll()
    .then(data=>{
        res.status(200).json(data);
    })
    .catch(err=>{
        res.status(500).json(err); 
    });
}