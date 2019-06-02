module.exports = function(req, res){
    const mdl = require('../../models');
    mdl.Company.findAll({
        include:[{
            model:mdl.Employee,
            through: { attributes: [] },
        }]
    })
    .then(data=>{
        res.status(200).json(data);
    })
    .catch(err=>{
        res.status(500).json(err); 
    });
}