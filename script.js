const numeroMaximo = 100;
let numeroAleatorio = gerarNumeroAleatorio(); //chama a função e armazena o numero na variável 
let numeroTentativas = 0;
let numerosTentativasArr = []; // Definindo numerosTentativasArr no escopo global
let aviso; // Declarando a variável aviso

function gerarNumeroAleatorio(){ //função que gera um numero aleatório
    return parseInt(Math.random()* numeroMaximo + 1); 
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
        p1.classList.remove("error");

        setTimeout(() => {
            p1.classList.add("sucess");
        }, 10);      

        exibirTextoNaTela('h1Texto', 'Parabéns, você acertou!');
        let palavraTentativa = numeroTentativas > 1 ? 'tentativas' : 'tentativa'; //operador ternario, se (? substitui o if) o numero for maior que 1 (true) então vai ser tentativas, senão (o : subs. o else), vai ser tentativa
        exibirTextoNaTela('p1', `o número secreto era ${numeroAleatorio}, e você descobriu em ${numeroTentativas} ${palavraTentativa}`);
        exibirTextoNaTela('pTexto', ``);
        
    } else { //ERRO            
        if (numeroEscolhido == ""){
            alert('insira um número válido');
        } else{
            setTimeout(() => {
                p1.classList.add("error");
            }, 10);
            if (numeroEscolhido > numeroAleatorio){
                exibirTextoNaTela('p1', `O número secreto é menor que ${numeroEscolhido}`);
            } else {
                exibirTextoNaTela('p1', `O número secreto é maior que ${numeroEscolhido}`);
            }

            console.log(numerosTentativasArr);
            listaNumeros(numeroEscolhido);
            numeroTentativas++;
            exibirTextoNaTela('pNumeroTentativas', `Tentativas: ${numeroTentativas}`);
            limparCampo();
        } 
    }

}

function listaNumeros(numeroEscolhido){
    if (!numerosTentativasArr.includes(numeroEscolhido)) {
        numerosTentativasArr.push(numeroEscolhido);
    }
    numerosTentativasArr.sort(function(a, b) {return a - b;}) // Função de comparação para ordenar em ordem crescente
    exibirTextoNaTela('p2NumerosTestados', `Números testados: ${numerosTentativasArr.join(", ")}`);
}

function limparCampo(){
    numeroEscolhido = document.getElementById("ContainerInput");
    numeroEscolhido.value = '';
}

window.onload = function(){
    aviso = document.getElementById('aviso'); // Atribuir o elemento aviso após o carregamento da página
    exibirMensagemInicial();
    p1.classList.remove("success", "error");

    let containerInput = document.getElementById("ContainerInput");
    containerInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") { // Verifica se a tecla pressionada é a tecla Enter
            event.preventDefault(); // Previne o comportamento padrão da tecla Enter (submeter formulário, recarregar página, etc.)
            verificarTentativa(); 
        }
    });
}

function reiniciarJogo(){
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    numeroTentativas = 1;
    numerosTentativasArr = []; // Limpar a lista de números tentados
    exibirMensagemInicial();
    document.getElementById("botaoReiniciar").setAttribute('disabled', true);
    p1.classList.remove("success", "error");

}