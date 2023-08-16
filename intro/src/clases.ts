class Astronauta {

    constructor(
            public id:number, 
            public nombre:string,  
            private _record:string,
            public recompensa:string
        )
        {}

        obtenerRecompensa(record:string){
            if (record === 'artemis') {
                this.recompensa = 'congratulations you won a panze'
                return this.recompensa
            }
        }
        set record(record:string){
            this._record = record;
        }
        get record():string{
            return this._record
        }
}
//via constructor

const astronautaPhidolly = new Astronauta(1, 'fernando', 'luna', 'ninguna')
//ganador

astronautaPhidolly.obtenerRecompensa("artemis")

console.log(`recompensa por record alcanzado ${astronautaPhidolly.recompensa}`);


console.log(astronautaPhidolly.nombre);

//setter

astronautaPhidolly.record = 'sincelejo galaxy'

console.log(`record via setter de fernando ${astronautaPhidolly.record}`);



