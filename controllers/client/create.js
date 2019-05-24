module.exports = function(req, res){
    const mdl = require('../../models');
    const body = req.body;
    if(!body.name) return res.send('No data');
    const data ={
      name: body.name,
      logo: body.logo,
      company_name: body.company_name,
      address: body.address,
      skype: body.skype,
      phone: body.phone
    }
    mdl.Client.create(data)
    .then(result=>{
        res.status(201).json(result);
    })
    .catch(err=>{
        res.status(500).json(err);
    })
}
