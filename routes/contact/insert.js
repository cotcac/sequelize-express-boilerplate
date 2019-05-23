const mdl = require('../../db/mdl_contact');
const email = require('../../lib/email');

module.exports = function(req, res){
  const body = req.body;
  mdl.add(body, (err)=>{
    if(err) res.status(500).json(err);
    const emailData ={
      subject: 'New Contact',
      message:`<p>Hello Admin,</p>
      <p>You got a new contact message!</p>
      <p>Name: ${body.name} </p>
      <p>email: ${body.email}</p>
      <p>Message: ${body.message}</p>`
    }
      email(emailData, function(err,data){
      if(err) return res.status(500).send('Save to db but email fail');
      res.status(201).json(data);
    })
  })
}
