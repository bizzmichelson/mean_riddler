var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//routes
var indexRoute = require('./modules/routes/indexrouter');

app.use('/', indexRoute);
var port = 6421; 

app.listen(port, function() {
    console.log('port listening at ->', port);
});