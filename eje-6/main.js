// Actividad 1

// const equipo = ['Moe','Homer','Burns','Apu'];

// for (integrante of equipo){
//     alert(integrante+' '+equipo.indexOf(integrante));
// }


// Actividad 2

const equipo = [];

let integrante = prompt('Ingrse integrante nuevo:');

while (integrante != 'ESC'){

    equipo.push(integrante);
    integrante = prompt('Ingrse integrante nuevo:');
}

for (integrante of equipo){
    alert(integrante+' '+equipo.indexOf(integrante));
}

// Actividad 3

// class Jugador{
    
//     constructor(nombre, nroCamiseta,edad,lesionado){
//         this.nombre = nombre;
//         this.nroCamiseta = nroCamiseta;
//         this.edad = edad;
//         this.isLesionado = lesionado;
//     };
// };

// const j1 = new Jugador('j1',10,21,true);
// const j2 = new Jugador('j2',20,22,true);
// const j3 = new Jugador('j3',30,23,false);
// const j4 = new Jugador('j4',40,24,true);
// const j5 = new Jugador('j5',50,25,false);

// const equipo =[];

// equipo.push(j1);
// equipo.push(j2);
// equipo.push(j3);
// equipo.push(j4);
// equipo.push(j5);

// console.table(equipo);

// Actividad 4

class Jugador{
 
    constructor(nombre, nroCamiseta,edad,lesionado){
        this.nombre = nombre;
        this.nroCamiseta = nroCamiseta;
        this.edad = edad;
        this.isLesionado = lesionado;
    };
};

function buscarJugador(jugador,equipo){

    return  equipo.find(jName => jName === jugador)

}

const j1 = new Jugador('j1',10,21,true);
const j2 = new Jugador('j2',20,22,true);
const j3 = new Jugador('j3',30,23,false);
const j4 = new Jugador('j4',40,24,true);
const j5 = new Jugador('j5',50,25,false);

const equipo =[];

equipo.push(j1);
equipo.push(j2);
equipo.push(j3);
equipo.push(j4);
equipo.push(j5);

console.log(buscarJugador(j1,equipo));
