//OBJECT (ARRAY)

let goleadores:string[] = ['joel', 'phidolly', 'akio']

let goles:number[] = [0, -1, 6]

console.log(`goleadores ${goleadores}`);
console.log(`goles ${goles}`);

let  corners:number[] = []


//metodo alternativo para definir arrays en type script

let penalties:Array<boolean> = [true]
console.log(`joel boto dos penalties: ${penalties}`);


//autocompletar con metodos aplicables segun tipo de dato de array

console.log(goles.map(Ele=>Ele.toString()));


//object

let goleadoresId = [7, 10, 17, 11]

goleadoresId.push(+'1', +'24')

console.log(goleadoresId);

//objects

const songs = {
    id:1, 
    name: 'exceeding joy',

}

console.log(songs);



const singer : {
    id: number,
    nombre: string,
    edad: number
    
} = {
    id:1,
    nombre: 'joel',
    edad : 35
}

singer.id = 2
console.log(singer.id);



