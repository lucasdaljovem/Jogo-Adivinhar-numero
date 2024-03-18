const numeroMaximo = 100;
let numeroAleatorio = gerarNumeroAleatorio(); //chama a função e armazena o numero na variável 
let numeroTentativas = 1;

function gerarNumeroAleatorio(){ //função que gera um numero aleatório
        return parseInt(Math.random()* numeroMaximo + 1); 
}  
function listaNumeros(){
    const numerosTentativasArr = [];
    numerosTentativasArr.push(numeroEscolhido);
    exibirTextoNaTela('p2NumerosTestados', `Números testados: ${numerosTentativasArr.join(",")}`);
}

function exibirTextoNaTela(id, texto) {
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1Texto', 'Jogo do número secreto');
    exibirTextoNaTela('pTexto', `Escolha um número entre 1 e ${numeroMaximo}`);
    exibirTextoNaTela('p1', " ");
    exibirTextoNaTela('pNumeroTentativas', `Tentativas: 0`);
    exibirTextoNaTela('p2NumerosTestados', `Números testados: nenhum`);

}

console.log('O número secreto é ' + numeroAleatorio) //gera um comentario no console 
function verificarTentativa(){
    let numeroEscolhido = document.getElementById("ContainerInput").value;

    if (numeroEscolhido == numeroAleatorio){ //ACERTO
        exibirTextoNaTela('h1Texto', 'Parabéns, você acertou!');
        let palavraTentativa = numeroTentativas > 1 ? 'tentativas' : 'tentativa'; //operador ternario, se (? substitui o if) o numero for maior que 1 (true) então vai ser tentativas, senão (o : subs. o else), vai ser tentativa
        exibirTextoNaTela('p1', `o número secreto era ${numeroAleatorio}, e você descobriu em ${numeroTentativas} ${palavraTentativa}`);
        exibirTextoNaTela('pTexto', ``);

    } else { //ERRO
        if (numeroEscolhido > numeroAleatorio){
            exibirTextoNaTela('p1', `O número secreto é menor que ${numeroEscolhido}`);
        } else {
            exibirTextoNaTela('p1', `O número secreto é maior que ${numeroEscolhido}`);
        }

        console.log(numerosTentativasArr);
        listaNumeros();
        numeroTentativas++;
        exibirTextoNaTela('pNumeroTentativas', `Tentativas: 1`);
        limparCampo();
    }
    
}

// numeroEscolhido.addEventListener("keypress", function(event) {
//     if (event.key === "Enter") {
//         event.preventDefault();
//         verificarTentativa();
//     }
// });


function limparCampo(){
    numeroEscolhido = document.getElementById("ContainerInput");
    numeroEscolhido.value = '';
}

window.onload = function(){
    exibirMensagemInicial();
}

function reiniciarJogo(){
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    numeroTentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}