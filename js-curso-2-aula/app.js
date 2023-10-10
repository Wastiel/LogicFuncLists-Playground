
let numeroSecreto = gerarNumeroAleatorio();
//let numeroSecreto = 5;
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
}

function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto.');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

mensagemInicial();


function verificarChute(){
    let chute = document.querySelector('input').value;
    //console.log(numeroSecreto == chute);
    if(numeroSecreto == chute){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagemTentativas =` Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; 
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroSecreto > chute){
            exibirTextoNaTela('p', 'O número secreto é maior!');
        }
        else{
            exibirTextoNaTela('p', 'O número secreto é menor!');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;

    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}