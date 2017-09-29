myApp.controller('RiddleController', function(RiddleService){ // $http? !!!!!!!
    var vm = this;
    RiddleService.getRiddles();
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

    vm.handfulOfRiddles = RiddleService.riddleStuff;

    // vm.riddleGrabber = function() {
    //     console.log('in RIDDLE GRABBER');
    //     vm.riddlesToSend = {

    //     }
    // }
})