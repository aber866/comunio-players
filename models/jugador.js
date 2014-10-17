var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var jugadorSchema = new Schema({
    nombre:    { type: String },
    edad:     { type: Number },
    equipo:  { type: String },
    demarcacion:    { type: String, enum:
      ['Portero', 'Defensa', 'Centrocampista', 'Delantero']
    }  
});

//Se podrá crear un nuevo objeto con new Jugador
module.exports = mongoose.model('Jugador', jugadorSchema);