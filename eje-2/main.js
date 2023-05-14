// Actividad 1

// let fuiYo = 'Rodrigo';

// let nombre=prompt('Ingrse nombre:');

// if (fuiYo==nombre){
//     alert('Fui Yo');
// }else{
//     alert('Yo no fui');
// };

// Actividad 2

// let letra=prompt('Toque una tecla:');

// if (letra=='Y' || letra=='y' ){
//     alert('Correcto');
// }else{
//     alert('Error');
// };

// let seleccion=parseInt(prompt('Elija un numero del 1 al 4:'));

// if (seleccion == 1){
//     alert('Elegiste a Homero');
// }else if(seleccion == 2){
//     alert('Elegiste a Marge');
// }else if(seleccion == 3){
//     alert('Elegiste a Bart');
// }else if(seleccion == 4){
//     alert('Elegiste a Lisa');
// }else{ 
//     alert('Error las opciones van del 1 al 4')
// }

// Actividad 4

// let elNumero=parseInt(prompt('Ingrese un numero entero por favor:'));

// if (elNumero >= 0 && elNumero <= 1000){
//     alert('Presupuesto bajo');
// }else if(elNumero >= 1001 && elNumero <= 3000){
//     alert('Presupuesto medio');
// }else if(elNumero > 3000){
//     alert('Presupuesto alto');
// }else{
//    alert('Error');
//}

// Actividad 5

let producto1 = prompt('Igrese un producto 1:');
let producto2 = prompt('Igrese un producto 2:');
let producto3 = prompt('Igrese un producto 3:');
let producto4 = prompt('Igrese un producto 4:');

if ((producto1 != '') && (producto2 != '') && (producto3 != '') && (producto4 != '')){
                alert('La lista que ingreso es:\n'+
                    '1) '+producto1+'\n'+
                    '2) '+producto2+'\n'+
                    '3) '+producto3+'\n'+
                    '4) '+producto4+'\n'
                )
}else{
    alert('Error: Es necesario cargar todos los productos')
}
                
