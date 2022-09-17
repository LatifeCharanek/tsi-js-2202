let btnCalcular = document.getElementById('calcular');

btnCalcular.addEventListener('click', function (evento){
    evento.preventDefault();
    
    let servico = document.getElementById('servico');
    let prazo = document.getElementById('prazo');
    let res = document.getElementById('resultado');

    /*recuperar os dados da matriz*/
    let preco = calculaPreco(servico.value, prazo.value);
    

    //Mostra o resultado no elemento 
    res.innerText = `O preco é ${preco}`;


    console.log(servico.value);


    //Ver dados do evento (click) no console
    console.log(evento);

    //Obter os valores de servico e prazo 
    
});

function calculaPreco (servico, prazo){

    let tabela =[ ['$$$','$$','$'],
                  ['$$$$','$$$','$$'],
                  ['Não faz','Não faz','$$$']];

    return tabela[servico][prazo];

}
