let amigos = ['Layla' , 'Latifi', 'Henrique', 'Lina', 'Bruna'];

console.log(amigos.length);

//Looping com vetor
for(let i = 0 ; i < amigos.length ; i++){

    console.log(`Amigo: ${amigos[i]}`);
}

// Foreach For = para cada
amigos.forEach(function ( valor, indice){

    console.log(`${indice}: ${valor}`);

});

amigos.map(function(valor, indice){
    
    console.log(`${indice}; ${valor}`);
});