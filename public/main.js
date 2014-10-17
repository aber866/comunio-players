//Module asignado a la variable del ng-app del html
var nodeApp = angular.module('nodeApp', []);
//Controller del module que se llama como el ng-controller del body
nodeApp.controller('mainCtrl', function ($scope,$http) {
    $scope.formData = {};

    $http.get('/jugadores')
        .success(function(data) {
            $scope.jugadores = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });


    // Cuando se añade un nuevo jugador, manda el texto a la API
    $scope.añadirJugador = function(){
        alert("aa");
        $http.post('/jugadores', $scope.formData)
            .success(function(data) {
                $scope.formData = {};
                $scope.jugadores = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error:' + data);
            });
    };
});

