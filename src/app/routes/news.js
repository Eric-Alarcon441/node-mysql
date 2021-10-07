const dbConnection = require('../../config/dbConnection');

module.exports = (app) => {
	const conn = dbConnection();
	app.get('/', (req, res) => {
		conn.query('select * from news', (err, rows) => {
			res.render('news/news', {
				news: rows,
			});
		});
	});

	app.post('/news', (req, res) => {
		const { title, news } = req.body;
		conn.query(
			'insert into news set ?',
			{
				title,
				news,
			},
			(err, result) => {
				res.redirect('/');
			}
		);
	});
};
