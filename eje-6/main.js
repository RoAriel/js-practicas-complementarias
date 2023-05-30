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