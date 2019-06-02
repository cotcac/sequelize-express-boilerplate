module.exports = async (req, res) => {
    const mdl = require('../../models');
    const body = req.body;
    if (!body.name) return res.send('No data');
    try {
        const company = await mdl.Company.create({ name: body.name });
        if (body.employees && body.employees.length > 0) {
            company.setEmployees(body.employees);
        }
        return res.status(200).json(company);

    } catch (err) {
        return res.status(500).json({ err });
    }


}