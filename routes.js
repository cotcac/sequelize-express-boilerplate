module.exports = function(app){
	// admin.

	// visitor
  app.use('/', require('./routes/index'));
  app.use('/users', require('./routes/users'));
  app.use('/', require('./routes/auth'));
  app.use('/contact', require('./routes/contact'));
  app.use('/images', require('./routes/images'));

}
