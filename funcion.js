// function = miFuncion() {
//     //proceso a realizar

// }

// miFuncion();

// function miSaludo() {
//     console.log("Hola, desde mi funcion pedorra");
// }

// miSaludo();

// function saludar(nombre){
//     console.log("Hola " + nombre + " Bienvenida!");
// }

// saludar('fernanda');

// function miSaludoObtenido(nombre){
//     let  mensaje = "Hola " + nombre;

//     return mensaje;
// }

// let enviarNombre = miSaludoObtenido("josué")

// console.log(enviarNombre);

//funciones anonimas

// let saludo = function (nombre){
//     saludar = `hola ${nombre}`

//     return saludar
// }

// console.log(saludo('Fernanda'))

//Funciones de flecha

let saludo = (nombre) => {
    return `saludos ${nombre}`
}

console.log(saludo('josué'))

let saludo2 = nombre2  => `Saludos ${nombre2}`

console.log(saludo2('Marisol'));