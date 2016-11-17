var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
	//res.sendFile(path.join(__dirname, 'ui', 'index.html'));
	res.send("<html><body><h1>Hello World!</h1></body></html>");
});

app.set('port', process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080);

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});
