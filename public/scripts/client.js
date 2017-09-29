var myApp = angular.module('myApp', ['ngRoute']);
console.log('myApp sourced');

myApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/addriddle.html',
        controller: 'RiddleController as RC'
    }).when('/riddle', {
        templateUrl: 'views/viewriddle.html',
        controller: 'RiddleController as RC'
    }).otherwise({
        redirectTo: '/'
    });
});