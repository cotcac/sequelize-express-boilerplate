module.exports = function(req, res){
    const mdl = require('../../models');
    const id = req.params.id;
    if(!id) return res.send('No data');
    const body = req.body;
    if(!body.name) return res.send('No data');
    mdl.Role.update({name:body.name},{where:{id:id}})
    .then(result=>{
        res.status(200).json(result);
    })
    .catch(err=>{
        res.status(500).json(err);
    })
}
