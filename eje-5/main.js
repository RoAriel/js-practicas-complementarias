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

registrados = '';
for(let i=0; i<5;i++){

    let tienda = new Tienda(
        prompt('nombre'),
        prompt('dir'),
        prompt('propietario'),
        prompt('rubro')
    );

    registrados +=
    "{\n" +
    'Nombre :'+tienda.nombre +
    "\n" +
    'Direccion: '+tienda.direccion +
    "\n" +
    'Propietario: '+tienda.propietario +
    "\n" +
    'Rubro: '+tienda.rubro +
    "\n}\n";
}

console.log(registrados);