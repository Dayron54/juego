// let nota = Math.random() * 5;

// console.log("aleatorio: "  + nota);

// if (nota >= 3)
// {
//     console.log("Pasa la materia");
// } else if(nota <= 4) {
//     console.log("Muy bien");
// } else {
//     console.log("Exelente");
// }

// console.log("____________________");

// let fruta = prompt("Ingrese el nombre de la fruta");

// if (fruta == "Manzana")
// {
//     console.log("La Manzana vale $ 10.000");
// }
// else if (fruta == "Pera")
// {
//     console.log("La Pera vale $ 15.000");
// }
// else if (fruta == "Limon")
// {
//     console.log("La Limon vale $ 6.000");
// }
// else if (fruta == "Mango")
// {
//     console.log("La Mango vale $ 8.000");
// }
// else
// {
//     console.log("Se nos agotó la fruta");
// }

// switch(fruta){
//     case"Manzana":
//        alert("La manzana vale $10.000");
//        break;
//     case"Pera":
//        alert("La Pera vale $15.000");
//        break;
//     case"Limón":
//        alert("La Limón vale $6.000");
//        break;
//     case "Mango":
//         alert("El mango vale $8.000")
//         break;
//     default:
//         alert("Se  nos agoto la fruta");
// }

// for(let i = 1; i< 30; i++)
// {
//     console.log(i);
// }

// let dineroEnCaja = Number(prompt("ingrese el monto de dinero"));
// let proyectos = 0;
// while(dineroEnCaja > 0)
// {
//     alert("Dinero disponible: " + dineroEnCaja);
//     let presupuestoProyecto = Number(prompt("Ingrese el monto del proyecto"));
//     if(dineroEnCaja >= presupuestoProyecto)
//     {
//         dineroEnCaja -= presupuestoProyecto;
//         alert("Se asignaron recursos para su proyecto");
//         proyectos ++;
//     }
//     else{
//         alert("No alcanzan los recursos");
//     }
// }
// alert("Se agotaron los recursos");
// alert("Los proyectos aprobados son: " + proyectos);

// let candidato1 = 0;
// let candidato2 = 0;
// let candidato3 = 0;
// let candidato4 = 0;

// let voto;

// for(let i = 1; i< 30; i++)
// {
//     voto =("Ingrese el número del candidato de su preferencia: \n1. Mateo. \n2. Marcos. \n3. Lucas. \n4. Juan.");
    
//     switch(voto){
//         case "1":
//             candidato1++;
//             break;
//         case "2":
//             candidato2++;
//             break;
//         case "3":
//             candidato3++;
//             break;
//         case "4":
//             candidato4++;
//             break;
//     }
// }
// $mensaje ="El vocero del curso es: ";
// if (candidato1 > candidato2 && candidato1 > candidato3 && candidato1 > candidato4)
// {
//     $mensaje += "Mateo";
// }
// else if (candidato2 > candidato1 && candidato2 > candidato3 && candidato2 > candidato4)
// {
//     $mensaje += "Marcos";
// }
// else if (candidato3 > candidato1 && candidato3 > candidato2 && candidato3 > candidato4)
// {
//     $mensaje += "Lucas";
// }
// else if (candidato4 > candidato1 && candidato4 > candidato2 && candidato4 > candidato3)
// {
//     $mensaje += "Juan";
// }
// else
// {
//     $mensaje = "No hay ganador."
// }

// alert( $mensaje);
const numVoto = document.getElementById("numVoto");
const numVotar = document.getElementById("numVotar");
