module.exports = function(app) {
	//Importamos el mismo Jugador que exportamos en jugador.js
	var Jugador = require('../models/jugador.js');

	//GET - Devolver todos los jugadores
    findAllJugadores = function(req, res) {
    	Jugador.find(function(err,jugadores){
    		if(!err) res.send(jugadores);
    		else console.log('ERROR: ' + err);
    	});
    };

    //GET - Devuelve un único jugador por id
    findById = function(req, res) {
        //req.param.id es el parámetroq ue va a pasarle el navegador
        Jugador.findById(req.params.id, function(err, jugador) {
            if(!err) res.send(jugador);
            else console.log('ERROR: ' + err);
        });
    };

    //POST - Insertar un nuevo jugador
    addJugador = function(req, res) {
    	var jugador = new Jugador({
      		nombre  	: req.body.nombre,
      		edad		: req.body.edad,
      		equipo  	: req.body.equipo,
      		demarcacion	: req.body.demarcacion 
    	});
    	jugador.save(function(err) {
    		if(!err) console.log('Jugador creado');
    		else console.log('ERROR: ' + err);
    		//Para que se actualize la página al insertar un jugador llamamos a la función de
    		//listar los jugadores. Se mete dentro del save para que se haga después.
    		findAllJugadores(req, res);
    	});
    };

    //DELETE 
    deleteJugador = function(req, res) {
      	Jugador.findById(req.params.id, function(err, jugador) {
        	jugador.remove(function(err,jugadores) {
          		if(!err) console.log('Jugador borrado');
          		else console.log('ERROR: ' + err);
          		//Igual que al añadir, al borrar volvemos a listar los jugadores
        		findAllJugadores(req, res);
        	});
      	});
    }

    //PUT - Modificar
    updateJugador = function(req, res) {
      	Jugador.findById(req.params.id, function(err, jugador) {
        	jugador.nombre  = req.body.nombre;
        	jugador.edad 	= req.body.edad;
        	jugador.equipo  = req.body.equipo;
        	jugador.demarcacion  = req.body.demarcacion;

        	jugador.save(function(err) {
          		if(!err) console.log('Modificado');
          		else console.log('ERROR: ' + err);
          		findAllJugadores(req, res);
        	});
      	});
    }

    //Rutas
    app.get('/jugadores', findAllJugadores);
    app.get('/jugador/:id', findById);
    app.post('/jugador', addJugador);
    app.put('/jugador/:id', updateJugador);
    app.delete('/jugador/:id', deleteJugador);
}