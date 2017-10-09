const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
	res.write('Hello NodeJS!');
	setTimeout(() => {
		res.write('Still on');
		res.end();
	}, 3000);
	// res.end();
});

server.listen(8080);