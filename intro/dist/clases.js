"use strict";
class Astronauta {
    id;
    nombre;
    _record;
    recompensa;
    constructor(id, nombre, _record, recompensa) {
        this.id = id;
        this.nombre = nombre;
        this._record = _record;
        this.recompensa = recompensa;
    }
    obtenerRecompensa(record) {
        if (record === 'artemis') {
            this.recompensa = 'congratulations you won a panze';
            return this.recompensa;
        }
    }
    set record(record) {
        this._record = record;
    }
    get record() {
        return this._record;
    }
}
//via constructor
const astronautaPhidolly = new Astronauta(1, 'fernando', 'luna', 'ninguna');
//ganador
astronautaPhidolly.obtenerRecompensa("artemis");
console.log(`recompensa por record alcanzado ${astronautaPhidolly.recompensa}`);
console.log(astronautaPhidolly.nombre);
//setter
astronautaPhidolly.record = 'sincelejo galaxy';
console.log(`record via setter de fernando ${astronautaPhidolly.record}`);
