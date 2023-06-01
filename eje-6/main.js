// Actividad 1

// const equipo = ['Moe','Homer','Burns','Apu'];

// for (integrante of equipo){
//     alert(integrante+' '+equipo.indexOf(integrante));
// }


// Actividad 2

// const equipo = [];

// let integrante = prompt('Ingrse integrante nuevo:');

// while (integrante != 'ESC'){

//     equipo.push(integrante);
//     integrante = prompt('Ingrse integrante nuevo:');
// }

// for (integrante of equipo){
//     alert(integrante+' '+equipo.indexOf(integrante));
// }

// Actividad 3

class Jugador {

    constructor(nombre, nroCamiseta, edad, lesionado) {
        this.nombre = nombre;
        this.nroCamiseta = nroCamiseta;
        this.edad = edad;
        this.isLesionado = lesionado;
    };
};

const j1 = new Jugador('j1', 10, 21, true);
const j2 = new Jugador('j2', 20, 22, true);
const j3 = new Jugador('j3', 30, 23, false);
const j4 = new Jugador('j4', 40, 24, true);
const j5 = new Jugador('j5', 50, 25, false);

const equipo = [];

equipo.push(j1);
equipo.push(j2);
equipo.push(j3);
equipo.push(j4);
equipo.push(j5);

// console.table(equipo);

// Actividad 4

// function buscarJugador(equipo,jugadorNombre){
//     return  equipo.find(j => j.nombre === jugadorNombre.toLowerCase())
// }

// for(let i=0; i<3;i++){
//   let busqueda=buscarJugador(equipo,prompt('Ingrese el nombre del jugador'));
//   if(busqueda != undefined){
//   alert('Jugador: '+busqueda.nombre+'\nNro de Camiseta: '+busqueda.nroCamiseta+'\n Edad: '+busqueda.edad);
//     }else{
//         alert('NO EXISTE JUGADOR CON ESE NOMBRE');
//     }
// }

// Actividad 5

function filtroJugadores(equipo, edad) {
    return equipo.filter(j => j.edad === edad);
};

for (let i = 0; i < 5; i++) {
    const res = filtroJugadores(equipo, parseInt(prompt('Ingrese la edad:')));
    if (res.length > 0) { console.log(res) }
    else { alert('No hay jugadores de esa edad') };
}
