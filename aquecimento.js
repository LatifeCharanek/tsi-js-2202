// ex1 

for (let i = 0; i<10; i++){

    console.log( "Número da linha"+ i);
}

// ex2 

let i = 0
while ( i <= 10 ){
    console.log ("Número da linha com while" + i)
    i++;
}

// ex3

 i = 0;
do{
    console.log("Número de linha com do:" + i)
    i++;
}while( i < 10);

//ex4 (condi)
 
let a = 5;
let b= 10;

if ( a < b ){
    console.log("a é menor que b");}
else{ 
    console.log("b é maior que a");
}

//ex 5 switch 
let diaSemana=0;

switch (diaSemana) {
    case 0:
        console.log("Lunes");
        break;
    case 1:
        console.log("Martes");
        break;
    case 2:
         console.log("Miercules");
        break;
    case 3:
         console.log("Jueves");
        break;
    case 4:
        console.log("Viernes");
        break;
    case 5:
        console.log("Sábado");
        break;
    case 6:   
        console.log("Domingo");
        break;
    default:
        console.log("Número inválido!");
}

//Ternário

let x = 4;
let y = 2;

let resultado = x > y ? "x é maior" : "nao é maior";
 
//ex 6

console.log(resultado);

let genero = prompt ("Entre com M ou F" );

let saída = genero == 'M' ? "Masculino" : "Feminino"; 

console.log (saída) ;

//Coalescente

let coisa = null;
let variavel = coisa ?? "Não há";
console.log(variavel);