//  Actividad 1

// function entrada(){
//     let msj = prompt('Ingrese msj:');
//     return msj;
// };

// function procesamiento(valor){
//     let nuevo_valor = 'Esto es lo que ingreso al comienzo: '+valor;
//     return  nuevo_valor;
// };

// function salida(msj){
//     alert(msj);
// };

// let miEntrada = entrada();
// let msj = procesamiento(miEntrada);
// salida(msj);

//  Actividad 2

// function roundNumero(){
//     let nume = parseFloat(prompt('Ingrese un numero decimal:'));
//     return Math.round(nume);
// };

// for (let i=0; i<5; i++){
//     console.log(roundNumero());
// };

//  Actividad 3

// function impuesto (precio, porcentaje){
//     let impuestos = (porcentaje*precio)/100;

//     return precio+impuestos;
// };

// for (let i=0; i<5; i++){
//     let precio=parseFloat(prompt('Ingrese precio:'));
//     let porcentaje=parseInt(prompt('Ingrse % :'));

//     console.log(impuesto(precio,porcentaje));
// };

//  Actividad 4

function cotizarDolar(pesos){
    return pesos/500;
};

function cotizarPesos(dolar){
    return dolar/500;
};

let monto = parseFloat(prompt('Ingrese Monto:'));

let opcion = parseInt(prompt('Que quiere quiere convertir?\n'
+'1. Dolar\n'+'2. Pesos'));


if (opcion ===1){
    console.log('El monto ingresado son:'+cotizarDolar(monto)+' dolares');
}else{
    console.log('El monto ingresado son:'+cotizarPesos(monto)+' pesos');
}