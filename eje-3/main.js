//  Actividad 1

// let num= parseInt(prompt('Ingresa un numero:'));
// let txt= (prompt('Ingresa un texto:'));

// for(let i=0; i<num; i++){
//     console.log(txt);
// }

// Actividad 2

// let num= parseInt(prompt('Ingresa un numero:'));

// for (let i = 0; i<=  num; i++){

//     if(i ==4){
//         break;
//     }else{console.log('lado')}
// }

// Actividad 3

// let cant_max=10;
// let salida='';

// for (let i=0; i<cant_max; i++){
//     salida+=' '+prompt('Ingrese un nombre');
// };
// alert(salida);

// Actividad 4

// let salida='';
// let nombre=prompt('Ingresa nombre');

// while (nombre != 'voldemort'){
//     salida+= ' '+nombre;
//     nombre=prompt('Ingresa nombre');
// }

// alert(salida);

// Actividad 5

let codigo = prompt('Ingrese cod de producto')
while(codigo != 'ESC'){
    switch(codigo){
        case '1':
            console.log('Tomate');
            break;
        case '2':
            console.log('Papa');
            break;
        case '3':
            console.log('Carne');
            break;
        case '4':
            console.log('Pollo');
            break;
        default:
            console.log('No hay producto');
    }
    codigo = prompt('Ingrese cod de producto')
}