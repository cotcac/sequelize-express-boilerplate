module.exports = function(req, res){
    const mdl = require('../../models');
    const { id } = req.params;
    mdl.Company.findByPk(id,{
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