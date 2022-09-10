console.log(window);

//Como utilizar atributos de um objetio
//alert (` Sua resolução é: ${window.innerHeight} X ${window.innerWidth}`);

let meuTitulo = document.getElementById('titulo');

if(confirm("Deixe uma mensagem!")){

    let msg = prompt('Mensagem');
    meuTitulo.innerText = msg;
    meuTitulo.style.background = 'pink';
}else {

    meuTitulo.innerText = 'Sem mensagem';
    meuTitulo.style.background = 'purple';
}

//
console.log (window.navigator.vendor);