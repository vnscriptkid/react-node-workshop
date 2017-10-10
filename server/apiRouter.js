const express = require('express');
const router = express.Router();
const { Pool } = require('pg')
const pool = new Pool({	
	port : 5432,
	user : 'bugtrengezqotn',
	password : '893d827522dfa118699fdb1ebcb24ba364ef2f0e9a87d02555b55cb3e12d138a',
	database : 'd9megfadu3j6hk',
	host : 'ec2-54-225-237-64.compute-1.amazonaws.com',
	ssl : true
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