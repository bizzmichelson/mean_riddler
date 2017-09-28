var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var port = 6421; 

app.listen(port, function() {
    console.log('port listening at ->', port);
});