const express = require('express');
const router = express.Router();
const { Pool } = require('pg')
const pool = new Pool({
	host : 'localhost',
	port : 5432,
	user : 'postgres',
	password : '123456',
	database : 'books-dev'
});

router.get('/books', (req, res) => {
	pool.query('SELECT * FROM books', [], function(err, result){
		if(err) throw err;
		res.send(result.rows);
	});
});

router.get('/books/:bookId/ratings', (req, res) => {
	pool.query('SELECT * FROM reviews WHERE book_id = $1', [req.params.bookId], function(err, result){
		if(err) throw err;
		res.send(result.rows);
	});
});

export default router;