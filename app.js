let numeroSecreto = gerarNumeroAleatorio();
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibirTextoNaTela('h1', 'jogo secreto')
exibirTextoNaTela('p', 'escolha numero')


function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'acertou');
        exibirTextoNaTela('p', 'voce acertou o numero');
    }else {
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O numero é menor');
        }else{
            exibirTextoNaTela('p', 'O numero é maior');
        }
    }

}
function gerarNumeroAleatorio() {
    return parsecInt(Math.random() * 10 + 1);
}