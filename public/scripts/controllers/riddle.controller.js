myApp.controller('RiddleController', function(RiddleService){ // $http? !!!!!!!
    var vm = this;

    console.log('RiddleController');

    vm.addRiddle = function(){
        console.log('in addRiddle of RiddleController');
        var riddleToAdd = {
            creator: vm.creatorIn,
            setup: vm.setupIn,
            punchline: vm.punchlineIn
        };
        RiddleService.addRiddle(riddleToAdd);
    };
})