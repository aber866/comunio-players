(function(){
    //Module asignado a la variable del ng-app del html
    var nodeApp = angular.module('nodeApp', []);
    //Controller del module que se llama como el ng-controller del body
    nodeApp.controller('mainCtrl', function ($scope,$http) {
        $scope.formData = {};
        $scope.idupdate;

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
                "edad":$("#edad").val(),
                "equipo":$("#equipo").val(),
                "demarcacion":$("#demarcacion").val()
            }
            $http.post('/jugador', $scope.formData)
            .success(function(data) {
                $scope.formData = {};
                $scope.jugadores = data;
                $scope.restartForm();
            })
            .error(function(data) {
                console.log('Error:' + data);
            });
        };

        // Borra un jugador
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

        // Muestra un jugador determinado en el formulario
        $scope.showJugador = function(id) {
            $(".addUpt").text("Modificar");
            $http.get('/jugador/' + id)
                .success(function(data) {
                    //Rellena los campos del formulario con el get del jugador
                    $("#nombre").val(data.nombre);
                    $("#edad").val(data.edad);
                    $("#equipo").val(data.equipo);
                    $("#demarcacion").val(data.demarcacion);
                    //Se prepara para modificar
                    $scope.idupdate=id;
                    $(".btn-add").hide();
                    $(".btn-upd").show();
                });
        };

        // Modifica un jugador
        $scope.updateJugador = function() {
            $scope.formData={
                "nombre":$("#nombre").val(),
                "edad":$("#edad").val(),
                "equipo":$("#equipo").val(),
                "demarcacion":$("#demarcacion").val()
            }
            $http.put('/jugador/' + $scope.idupdate, $scope.formData)
            .success(function(data) {
                $scope.formData = {};
                $scope.jugadores = data;
                //Se configura para añadir el siguiente
                $(".addUpt").text("Añadir");
                $(".btn-add").show();
                $(".btn-upd").hide();
                $scope.restartForm();
            })
            .error(function(data) {
                console.log('Error:' + data);
            });
        };

        $scope.restartForm = function(){
            $("form input[type='text'], form input[type='number'], form select").val("")
            .removeClass("ng-dirty");
        }
    });
})();