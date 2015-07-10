var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    $scope.firstName = "Hendro";
    $scope.lastName = "Steven";
    $scope.showFullName = function () {
        window.alert("your name : "
                + $scope.firstName + " " + $scope.lastName);
    };
});
