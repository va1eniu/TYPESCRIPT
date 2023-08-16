interface Song{
    id:number,
    name:string
    year:number,
    album?:string,
}

const  amor:Song = {
    id:1,
    name:"love",
    year:1998,
    album: 'love for'
}

const  confianza:Song = {
    id:2,
    name:"trust",
    year:2016
}

console.log(amor.album);
console.log(confianza.year);