let numero = Math.floor(Math.random() * 100) + 1;

console.log(numero);

let intento = 50;

if(intento > numero)
{
    console.log("EL número ingresado es mayor.");
} else if(intento < numero){
    console.log("EL número ingresado es menor.");
} else {
    console.log("Has adivinado el numero.");
}