module.exports = function(req, res){
    const mdl = require('../../models');
    const body = req.body;
    if(!body.name) return res.send('No data');
    mdl.Employee.create({name:body.name})
    .then(result=>{
        res.status(201).json(result);
    })
    .catch(err=>{
        res.status(500).json(err);
    })
}