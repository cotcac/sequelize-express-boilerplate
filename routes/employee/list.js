module.exports = function(req, res){
    const mdl = require('../../models');
    mdl.Employee.findAll({
        include: [ {model: mdl.Company, attributes: ['name']} ]
      })
    .then(data=>{
        res.status(200).json(data);
    })
    .catch(err=>{
        res.status(500).json(err); 
    });
}