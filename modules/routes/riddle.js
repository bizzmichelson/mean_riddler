var router = require('express').Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/riddleBase');
var riddleSchema = new mongoose.Schema({
    creator: String,
    setup: String,
    punchline: String
});

var riddleModel = mongoose.model('riddleModel', riddleSchema);
router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({
//     extended: true
// }));

router.get('/', function(req, res){
    console.log('/riddle gotten');
    res.sendStatus(200);
});

router.post('/', function(req, res){
    console.log('/riddle POSTING');
    // resume here with building object to send to db
    var riddleToAdd = {
        creator: req.body.creator,
        setup: req.body.setup,
        punchline: req.body.punchline
    };

    console.log('logging riddle.js REQ.BODY -> ', req.body)

    var newRiddle = riddleModel(riddleToAdd);
    console.log(newRiddle);
    newRiddle.save(function(error){
        if (error){
            console.log(error);
            res.sendStatus(500);
        }else{
            res.sendStatus(201);
        }
    });

});

module.exports = router;