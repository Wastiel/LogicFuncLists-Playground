let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do Desafio";

function verificaBotao(){
    console.log('O botão foi clicado');
}

let cidade;
function nomeCidade(){
    cidade = prompt("Digite o nome de uma cidade do Brasil");
    alert(`Estive em ${cidade} e lembrei de você.`);
}

function verificaAlerta(){
    alert(`Eu amo javaScript`);
}

let numero1;
let numero2;

function soma(){
    numero1 = prompot('Digite o primeiro número a ser somado');
    numero2 = prompot('Digite o segundo número a ser somado');
    alert(`O resultado da soma do ${numero1} + o ${numero1} é: ` + (numero1 + numero2));
}