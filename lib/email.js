const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
module.exports = function(data, callback) {
  if(!data || !data.subject || !data.message) return callback('Not correct data',null);
  const transport = nodemailer.createTransport(smtpTransport({
		host: 'email-smtp.us-east-1.amazonaws.com',
		port: 465,
		secure: true,
		auth: {
			user: 'your name',
			pass: 'your-pass'
		}
	}));
	const mailOptions = {
  from: 'No Reply <no-reply@yourname.com>', // sender address
  to: con.email.to,
  subject: data.subject, // Subject line
  html: data.message // html body
};

transport.sendMail(mailOptions, function(err, info) {
  if(err) return callback(err,null);
		callback(null, info);
});

}
