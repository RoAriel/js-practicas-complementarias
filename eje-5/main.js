// Actividad 1

 class Tienda{
     constructor(nombre,dir,propietario,rubro){
     this.nombre = nombre;
     this.direccion = dir;
     this.propietario = propietario;
     this.rubro = rubro;
     };
 };

// const t1 = new Tienda('Minisuper', 'Calle 123','Apu','supermarket');
// const t2 = new Tienda('Musicaland', 'Calle 124','Fulano','musica');
// const t3 = new Tienda('LaTaberna','Calle 125','Moe','bar');

// console.log(t1);
// console.log(t2);
// console.log(t3);

// Actividad 2

// registrados = '';
// for(let i=0; i<5;i++){

//     let tienda = new Tienda(
//         prompt('nombre'),
//         prompt('dir'),
//         prompt('propietario'),
//         prompt('rubro')
//     );

//     registrados +=
//     "{\n" +
//     'Nombre :'+tienda.nombre +
//     "\n" +
//     'Direccion: '+tienda.direccion +
//     "\n" +
//     'Propietario: '+tienda.propietario +
//     "\n" +
//     'Rubro: '+tienda.rubro +
//     "\n}\n";
// }

// console.log(registrados);

// Actividad 3
// class Tienda{
//     constructor(nombre, direccion, propietario, rubro){
//         this.nombre = nombre;
//         this.direccion = direccion;
//         this.propietario = propietario;
//         this.rubro = rubro;
//     }
//     estaAbierto(hora){
//         if (((hora  >= 8) && (hora  <= 12))||((hora  >= 15) && (hora  <= 19))) {
//             return true;
//         }
//         return false;
//     }
// }
// const tienda4 = new Tienda("33 cents Store", "Cheap 231", "Barato SRL","Ropa");
// for (let index = 0; index < 3 ; index++) {
//     let entrada = parseInt(prompt("INGRESAR HORA EN PUNTO"));
//     if(tienda4.estaAbierto(entrada)){
//         alert("LA TIENDA ESTA ABIERTA A LAS "+entrada)
//     }else{
//         alert("LA TIENDA ESTA CERRADA A LAS "+entrada)
//     }
// }

// Actividad 4

// class Tienda{
//     constructor(nombre, direccion, propietario, rubro){
//         this.nombre = nombre;
//         this.direccion = direccion;
//         this.propietario = propietario;
//         this.rubro = rubro;
//     }
//       esPropietario(nombre){
//         return this.propietario == nombre;
//     }
// }
// const tienda1 = new Tienda("Kwik-E-Mart", "Park 123", "Apu", "Almacen");
// const tienda2 = new Tienda("Edna's Edibles", "PEREZ 323", "Edna Krabappel", "Panaderia");
// const tienda3 = new Tienda("Springfield Mall", "Hall 231", "Mr. Burns", "Shopping");
// for (let index = 0; index < 5; index++) {
//     let entrada = prompt("INGRESAR NOMBRE DE PROPITARIO");
//     if (tienda1.esPropietario(entrada)){
//         alert(entrada + " ES PROPIETARIO DE LA TIENDA " + tienda1.nombre);
//     }
//     if (tienda2.esPropietario(entrada)){
//         alert(entrada + " ES PROPIETARIO DE LA TIENDA " + tienda2.nombre);
//     }
//     if (tienda3.esPropietario(entrada)){
//         alert(entrada + " ES PROPIETARIO DE LA TIENDA " + tienda3.nombre);
//     }
// }

//Actividad 5

class Cliente{
    constructor(nombre,presupuesto,tarjeta,telefono){
        this.nombre = nombre;
        this.presupuesto = parseFloat(presupuesto);
        this.tarjeta = tarjeta;
        this.telefono = telefono;
    }

    transferirDinero(valor){
        if(this.presupuesto > 0 && valor < this.presupuesto){
            this.presupuesto-=valor;
            return valor;
        } else {
            return 0;
        };
    };
};

const cl1 = new Cliente('Pepe',50000,true,'1523523');
const cl2 = new Cliente('Juan',3000,true,'1523523');
const cl3 = new Cliente('Jose',15,true,'1523523');

for (let i = 0; i < 5; i++) {

    let entrada = parseFloat(prompt('Ingrese monto:'));

    if (cl1.transferirDinero(entrada))  alert(cl1.nombre+ ' TE PUEDE PAGAR '+entrada);

    if (cl2.transferirDinero(entrada))  alert(cl2.nombre+ ' TE PUEDE PAGAR '+entrada);

    if (cl3.transferirDinero(entrada))  alert(cl3.nombre+ ' TE PUEDE PAGAR '+entrada);
};

