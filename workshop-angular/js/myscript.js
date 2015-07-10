var myApp = angular.module('myApp', ['ngRoute']);
//configure routing
myApp.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl : 'home.html',
        controller  : 'HomeController'
    });
    $routeProvider.when('/about',{
        templateUrl : 'about.html',
        controller  : 'AboutController'
    });
    $routeProvider.otherwise({redirectTo: '/'});
});

myApp.controller('HomeController',function($scope){

});
myApp.controller('AboutController',function($scope){

});
