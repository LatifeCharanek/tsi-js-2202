/*
 Criar uma calculadora de valor a ser cobrado do cliente.
 O valor do servico pode variar conforme o prazo. 
 Os valores e prazos deve ser armazenados em uma matriz. 
 O cálculo deve ficar obrigatoriamente em uma funcao
 */ 

 let tabela = [ ['$$$','$$','$'],
                ['$$$$','$$$','$'],
                ['Não faz','Não faz','$$$']];
            
let servico = prompt("Entre com o servico: \n0 - Trooca de óleo \n1 - Balanceamento \n2 Cambagem")
let prazo = prompt ("Entre com o prazo: \n0- Um dia \n1 Dois dias\n2 - Três dias ");           
 
if ( validaEntrada(servico)&& validaEntrada(prazo)){

    alert ("O servico ficará em:" + tabela [servico][prazo]);

}else {

    alert ("ERRO: Verifique os valores inseridos e tente novamente!");

}
 

function validaEntrada(dadoUsuario){

        return dadoUsuario >= 0 && dadoUsuario <= 2 ? true : false }