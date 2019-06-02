const mdl = require('../../models');
module.exports = async (req, res)=>{

    try{
        const id = req.params.id;
        const body = req.body;
        if(!body) return res.status(422).send('no data');
        const company = await mdl.Company.findByPk(id);
        console.log(company);
        
        const data = {
            name: body.name
        }
        company.update(data);
        if (body.employees && body.employees.length > 0) {
            company.setEmployees(body.employees);
        }
        return res.status(200).json(company);

    }
    catch(err){
        console.log(err);
        

        res.status(500).json(err);

    }
}