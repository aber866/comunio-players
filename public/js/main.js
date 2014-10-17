//Module asignado a la variable del ng-app del html
var nodeApp = angular.module('nodeApp', []);
//Controller del module que se llama como el ng-controller del body
nodeApp.controller('mainCtrl', function ($scope,$http) {
    $scope.formData = {};

    $http.get('/jugadores')
        .success(function(data) {
            $scope.jugadores = data;
            console.log(data)
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // Cuando se añade un nuevo jugador, manda el texto a la API
    $scope.anadirJugador = function(){
        $scope.formData={
            "nombre":$("#nombre").val(),
            /*"edad":$("#edad").val(),
            "equipo":$("#equipo").val(),
            "demarcacion":$("#demarcacion").val()*/
            "edad":30,
            "equipo":"Glorioso",
            "demarcacion":"Delantero"
        }
        //$scope.jugadores=$scope.formData;
        $http.post('/jugador', $scope.formData)
        .success(function(data) {
            $scope.formData = {};
            $scope.jugadores = data;
        })
        .error(function(data) {
            console.log('Error:' + data);
        });
    };

    // Borra un TODO despues de checkearlo como acabado
    $scope.deleteJugador = function(id) {
        $http.delete('/jugador/' + id)
        .success(function(data) {
            $scope.jugadores = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error:' + data);
        });
    };
});
