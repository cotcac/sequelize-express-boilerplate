module.exports = function(app){
	// admin.

	// visitor
  app.use('/', require('./routes/index'));
  app.use('/users', require('./routes/users'));
  app.use('/company', require('./routes/company'));
  app.use('/employee', require('./routes/employee'));


}
