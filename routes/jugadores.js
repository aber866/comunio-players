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

    //POST - Insertar un nuevo jugador
    addJugador = function(req, res) {
    	console.log('POST');
    	console.log(req.body);
    	var jugador = new Jugador({
      	nombre  	: req.body.nombre,
      	edad		: req.body.edad,
      	equipo  	: req.body.equipo,
      	demarcacion	: req.body.demarcacion 
    	});
    	jugador.save(function(err) {
    		if(!err) console.log('Jugador creado');
    		else console.log('ERROR: ' + err);
    	});
    	//res.send(jugador);
    };

    //DELETE 
    deleteJugador = function(req, res) {
      Jugador.findById(req.params.id, function(err, jugador) {
        jugador.remove(function(err,jugadores) {
          if(!err) console.log('Jugador borrado');
          else console.log('ERROR: ' + err);
          //res.send(jugadores);
        })
      });
    }

    //Rutas
    app.get('/jugadores', findAllJugadores);
    //app.get('/tvshow/:id', findById);
    app.post('/jugador', addJugador);
    //app.put('/tvshow/:id', updateTVShow);
    app.delete('/jugador/:id', deleteJugador);
}