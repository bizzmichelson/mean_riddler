var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//routes
var indexRoute = require('./modules/routes/indexrouter');
var riddleRoute = require('./modules/routes/riddle');

app.use('/', indexRoute);
app.use('/riddle', riddleRoute);

app.use(express.static('public'));
app.use(bodyParser.json());

var port = 6421; 

app.listen(port, function() {
    console.log('port listening at ->', port);
});