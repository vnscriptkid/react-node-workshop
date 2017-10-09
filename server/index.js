const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.static('client'));

app.get('/', (req, res) => {
	// res.send('<h1>Hello Express</h1>');
	// res.sendFile('./client/index.html');

});

app.listen(3000);
// const server = http.createServer();

// server.on('request', (req, res) => {
// 	res.end(fs.readFileSync(__dirname + '/../client/index.html'));
// 	// res.write('Hello NodeJS!');
// 	// setTimeout(() => {
// 	// 	res.write('Still on');
// 	// 	res.end();
// 	// }, 3000);
// 	// res.end();
// });
// server.listen(8080);