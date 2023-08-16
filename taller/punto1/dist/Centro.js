"use strict";
class Centro {
    id;
    centro;
    ubicacion;
    antiguedad;
    contacto;
    constructor(id, centro, ubicacion, antiguedad, contacto) {
        this.id = id;
        this.centro = centro;
        this.ubicacion = ubicacion;
        this.antiguedad = antiguedad;
        this.contacto = contacto;
    }
}
const centroo = new Centro(1, 'campus', 'bogota', '1 año', 29999866);
console.log(centroo);
class Ruta {
    id;
    skills;
    softSK;
    profes;
    tiempo;
    constructor(id, skills, softSK, profes, tiempo) {
        this.id = id;
        this.skills = skills;
        this.softSK = softSK;
        this.profes = profes;
        this.tiempo = tiempo;
    }
}
const ruta = new Ruta(1, 'python', 'liderazgo', 'jhon', '6 meses');
console.log(ruta);
class Nivel {
    id;
    nivel;
    terminado;
    constructor(id, nivel, terminado) {
        this.id = id;
        this.nivel = nivel;
        this.terminado = terminado;
    }
}
const nivel = new Nivel(1, 'apolo', true);
console.log(nivel);
class Contrato {
    id;
    tipo;
    firmado;
    constructor(id, tipo, firmado) {
        this.id = id;
        this.tipo = tipo;
        this.firmado = firmado;
    }
}
const contrato = new Contrato(1, 'tiempo completo', true);
console.log(contrato);
class Camper {
    id;
    nombre;
    edad;
    constructor(id, nombre, edad) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
    }
}
const camper = new Camper(1, 'carlos', 20);
console.log(camper);
