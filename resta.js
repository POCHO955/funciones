import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function saludar(nombre){
    console.log(`hola ${nombre}, bienvenido a javascript`);
}

let resta = (n1, n2) => {
    let res = n1 - n2;
    return res;
}

rl.question("ingrese su nombre para saludarlo: ", (nom) => {
    saludar(nom);
    rl.question("ingrese el primer numero: ", (num1) => {
        rl.question("ingrese el numero dos: ", (num2) => {
            const resultado = resta(Number(num1), Number(num2));
            console.log(`El resultado de la resta es: ${resultado}`);
            rl.close();
        });
    });
});
    