"use strict";
//OBJECT (ARRAY)
let goleadores = ['joel', 'phidolly', 'akio'];
let goles = [0, -1, 6];
console.log(`goleadores ${goleadores}`);
console.log(`goles ${goles}`);
let corners = [];
//metodo alternativo para definir arrays en type script
let penalties = [true];
console.log(`joel boto dos penalties: ${penalties}`);
//autocompletar con metodos aplicables segun tipo de dato de array
console.log(goles.map(Ele => Ele.toString()));
//object
let goleadoresId = [7, 10, 17, 11];
goleadoresId.push(+'1', +'24');
console.log(goleadoresId);
//objects
const songs = {
    id: 1,
    name: 'exceeding joy',
};
console.log(songs);
const singer = {
    id: 1,
    nombre: 'joel',
    edad: 35
};
singer.id = 2;
console.log(singer.id);
