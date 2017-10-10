const { Pool } = require('pg')
const pool = new Pool({
	host : 'localhost',
	port : 5432,
	user : 'postgres',
	password : '123456',
	database : 'books-dev'
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
  client.query('SELECT * FROM books WHERE', (err, result) => {
    release()
    if (err) {
      return console.error('Error executing query', err.stack)
    }
    console.log(result.rows)
  })
})

// client.connect((err) => {
//   if (err) {
//     console.error('connection error', err.stack)
//   } else {
//     console.log('connected')
//   }
// })

// client.query('SELECT * FROM books', [], function(err, result){
// 	if(err) throw err;

// 	console.log(result.rows);

// 	client.end(function(err){
// 		if(err) throw err;
// 	})
// })