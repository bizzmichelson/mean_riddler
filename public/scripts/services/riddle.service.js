myApp.service('RiddleService', function($http){
    var sv = this;

    console.log('riddle service');

    $http({
        method: 'GET',
        url: '/riddle'
    }).then(function(response){
        console.log('response', response);
    })
})