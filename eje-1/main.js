// // Actividad 1

// let nombre=prompt('Ingrese Nombre:');
// console.log('Su nombre: '+nombre);

// let apellido=prompt('Ingrese Apellido:');
// console.log('Su apellido: '+apellido);

// let edad=prompt('Ingrese Edad:');
// console.log('Su edad: '+edad);

// // Actividad 2

// const ciudad1= 'Florencio Valrea';
// const ciudad2= 'Berazategui';
// const ciudad3= 'Quilmes';
// const ciudad4= 'Lanus';
// const ciudad5= 'Bosques';

// // Actividad 3

// let nacionalidad = prompt('Ingrese Nacionalidad:');

// let direccion= prompt('Ingrese direccion:');

// console.log(
//     'Nombre: '+nombre+'\n'+
//     'Apellido: '+apellido+'\n'+
//     'Edad: '+edad+'\n'+
//     'Nacionalidad: '+nacionalidad+'\n'+
//     'Direccion: '+direccion+'\n'

// );

// Actividad 4

// let integrante1=prompt('Integrante 1 de su familia: ')
// let integrante2=prompt('Integrante 2 de su familia: ')
// let integrante3=prompt('Integrante 3 de su familia: ')
// let integrante4=prompt('Integrante 4 de su familia: ')
// let integrante5=prompt('Integrante 5 de su familia: ')

// alert(
//     'Los integrantes de mi familia son: \n'+
//     integrante1+' \n'
//     +integrante2+' \n'
//     +integrante3+' \n'
//     +integrante4+' \n'
//     +integrante5
// );

// Actividad 5

let precio1 = parseFloat(prompt('Ingrese el precio para ver descuentos: '));
let descuento20= precio1 - precio1*0.2;
let descuento30= precio1 - precio1*0.3;
let descuento50= precio1 - precio1*0.5;


alert(
    'El primer precio fue: $'+precio1+' los descuentos son:\n'+
    'Con el descuento del 20% son: $'+descuento20+'\n'+
    'Con el descuento del 30% son: $'+descuento30+'\n'+
    'Con el descuento del 50% son: $'+descuento50+'\n'

);