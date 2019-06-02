module.exports = function(app){
	// admin.

	// visitor
  app.use('/', require('./controllers/index'));
  app.use('/company', require('./controllers/company'));
  app.use('/employee', require('./controllers/employee'));


}
