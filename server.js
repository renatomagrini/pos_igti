var http = require('http');
var app = require('./config/express');
const PORT = process.env.port||'8080';

http.createServer(app).listen(PORT, function() {
	console.log('Servidor iniciado');
});
