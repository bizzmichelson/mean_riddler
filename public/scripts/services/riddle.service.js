myApp.service('RiddleService', function($http){
    var sv = this;

    console.log('riddle service');

    sv.getRiddles = function(riddle){
    $http({
        method: 'GET',
        url: '/riddle'
    }).then(function(response){
        console.log('response', response);
    });
    }

    sv.addRiddle = function(riddle){
        console.log('in riddle.service POST function -> ', riddle);
        $http({
            method: 'POST',
            url: '/riddle',
            data: riddle
        }).then(function(response){
            console.log('riddle posted', response);
            sv.getRiddles();
        })
    }
})