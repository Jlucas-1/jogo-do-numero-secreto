let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;
let chute;
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );

}

function mensagemInicial() 
{
    exibirTextoNaTela("h1", "Jogo do número secreto!");
    exibirTextoNaTela("p", "Escolha um número ente 1 e 10");
}



function verificarChute() {
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Acertou");
        let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa";
        let mensagemTentativa = `Você acertou o número secreto em ${tentativa} ${palavraTentativa}`;
        exibirTextoNaTela("p", mensagemTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else if (chute < numeroSecreto) {
        exibirTextoNaTela("h1", "Errou");
        exibirTextoNaTela("p", "O número secreto é maior")
        limparCampo();
        tentativa++;

    }
    else {
        exibirTextoNaTela("h1", "Errou");
        exibirTextoNaTela("p", "O número secreto é menor")
        limparCampo();
        tentativa++;

    }
}
reiniciarJogo();

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (listaDeNumerosSorteados == numeroLimite) 
    {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido))
    {
        return gerarNumeroAleatorio();
    }
    else 
    {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}


function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    document.getElementById("reiniciar").setAttribute("disabled", true);
    mensagemInicial();
}  
