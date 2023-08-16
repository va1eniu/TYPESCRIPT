class Centro{

    constructor(
            public id:number, 
            public centro:string, 
            public ubicacion:string,
            public antiguedad:string,
            public contacto:number
        )
        {}


}
const centroo = new Centro(1, 'campus', 'bogota', '1 año',29999866)
console.log(centroo);


class Ruta{

    constructor(
            public id:number, 
            public skills:string, 
            public softSK:string,
            public profes:string,
            public tiempo:string
        )
        {}


}
const ruta = new Ruta(1, 'python', 'liderazgo', 'jhon','6 meses')
console.log(ruta);

class Nivel{

    constructor(
            public id:number, 
            public nivel:string, 
            public terminado:boolean,
        )
        {}
        set terminado(terminado:string){
            this._terminado = terminado;
        }
        get terminado():string{
            return this._terminado
        }


}
const nivel = new Nivel(1, 'apolo', true)
console.log(nivel);

class Contrato{

    constructor(
            public id:number, 
            public tipo:string, 
            public firmado:boolean,
        )
        {}


}
const contrato = new Contrato(1, 'tiempo completo', true)
console.log(contrato);

class Camper{

    constructor(
            public id:number, 
            public nombre:string, 
            public edad:number,
        )
        {}
        if () {
            
        }

}
const camper = new Camper(1, 'carlos', 20)
console.log(camper);



