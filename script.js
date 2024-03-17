const numeroMaximo = 100;
let numeroAleatorio = gerarNumeroAleatorio(); //chama a função e armazena o numero na variável 
let numeroTentativas = 1;

function gerarNumeroAleatorio(){ //função que gera um numero aleatório
        return parseInt(Math.random()* numeroMaximo + 1); 
}  

window.onload = function(){
    exibirMensagemInicial();
}

function exibirTextoNaTela(id, texto) {
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1Texto', 'Jogo do número secreto');
    exibirTextoNaTela('p1', `Escolha um número entre 1 e ${numeroMaximo}`);
}

console.log('O número secreto é ' + numeroAleatorio) //gera um comentario no console 

function verificarTentativa(){
    let numeroEscolhido = document.getElementById("ContainerInput").value;

    if (numeroEscolhido == numeroAleatorio){ //ACERTO
        exibirTextoNaTela('h1Texto', 'Paranbéns, você acertou!');
        let palavraTentativa = numeroTentativas > 1 ? 'tentativas' : 'tentativa'; //operador ternario, se (? substitui o if) o numero for maior que 1 (true) então vai ser tentativas, senão (o : subs. o else), vai ser tentativa
        exibirTextoNaTela('p1', `você descobriu o nomero secreto ${numeroAleatorio} em ${numeroTentativas} ${palavraTentativa}`);
    } else { //ERRO
        if (numeroEscolhido > numeroAleatorio){
            exibirTextoNaTela('p1', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p1', 'O número secreto é maior');

        }
        numeroTentativas++;
        limparCampo();
    }
    
}

function limparCampo(){
    numeroEscolhido = document.getElementById("ContainerInput");
    numeroEscolhido.value = '';

}

function reiniciarJogo(){
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    numeroTentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}