var express = require('express'),
	app = express();

var port = process.env.PORT || 8080;

var io = require('socket.io').listen(app.listen(port, '0.0.0.0'));

require('./config')(app, io);
require('./routes')(app, io);

console.log('Your application is running on http://localhost:' + port);