module.exports = function(app){
	// admin.

	// visitor
  app.use('/', require('./controllers/index'));
  app.use('/users', require('./controllers/users'));
  app.use('/roles', require('./controllers/role'));
  app.use('/status', require('./controllers/status'));
  app.use('/clients', require('./controllers/client'));
  app.use('/company', require('./controllers/company'));
  app.use('/employee', require('./controllers/employee'));


}
