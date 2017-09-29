var router = require('express').Router();

router.get('/', function(req, res){
    console.log('/riddle gotten');
    res.sendStatus(200);
})

module.exports = router;