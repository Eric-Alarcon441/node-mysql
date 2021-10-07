const app = require('./config/server');
require('./app/routes/news')(app);

app.set('port', process.env.PORT || 3000);

//starting server
app.listen(app.get('port'), () => {
	console.log('server on port', app.get('port'));
});
