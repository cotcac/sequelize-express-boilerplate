module.exports = function(req, res){
    const mdl = require('../../models');
    const body = req.body;
    if(!body.name || !body.companyId) return res.send('No data');
    mdl.Employee.create({name:body.name, companyId:body.companyId})
    .then(result=>{
        res.status(201).json(result);
    })
    .catch(err=>{
        res.status(500).json(err);
    })
}