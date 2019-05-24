module.exports = function(req, res){
    const mdl = require('../../models');
    const body = req.body;
    if(!body.name) return res.send('No data');
    mdl.Role.create({
      name:body.name,
      short_cut:body.short_cut,
      description:body.description
    })
    .then(result=>{
        res.status(201).json(result);
    })
    .catch(err=>{
        res.status(500).json(err);
    })
}
