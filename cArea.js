import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcualarArea(base, altura){
    let calculo = parseFloat(base*altura);
    return calculo;
}

rl.question("Ingrese la base del rectangulo:", (base) => {
    rl.question("Ingrese la altura del rectangulo:", (altura) => {
        
        // let result= calcularArea(base, altura);
        // console.log(`El area del rectangulo es: ${result}`);
        console.log('El area del rectangulo es:', calcualarArea(base, altura) );
        rl.close();
    });
});