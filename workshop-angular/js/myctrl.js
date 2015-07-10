var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    $scope.customers=[
        {name:'Hendro',city:'Salatiga'},
        {name:'Budi',city:'Boyolali'},
        {name:'Andre',city:'Semarang'}
    ];
    $scope.addCustomers=function(){
        data = {name:$scope.fname,city:$scope.fcity};
        $scope.customers.push(data);
        $scope.fname='';
        $scope.fcity='';
    };
});
