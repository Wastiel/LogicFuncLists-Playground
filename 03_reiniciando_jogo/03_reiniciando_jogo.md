# Aula 02. Funções

## 01. Projeto da aula anterior
- [Aula 02 zip](https://github.com/alura-cursos/js-curso-2/archive/refs/heads/aula_2.zip)
- [Arquivos no Github](https://github.com/alura-cursos/js-curso-2/tree/aula_2)

## 02. Verificando o chute
- Console ferramenta do desenvolvedor
- Vamos chamar as funções para alterar as tags p e h1 para em caso de vitoria
- Vamos chamar as funções para alterar as tags p e h1 para em caso de derrota
- Conseguimos com funções fazer o jogo de forma sem alerts na tela

````javascript

let numeroSecreto = gerarNumeroAleatorio();
//let numeroSecreto = 5;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
}

exibirTextoNaTela('h1', 'Jogo do número secreto.');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute(){
    let chute = document.querySelector('input').value;
    //console.log(numeroSecreto == chute);
    if(numeroSecreto == chute){
        exibirTextoNaTela('h1', 'Parabéns você acertou!');
        exibirTextoNaTela('p', 'Você descobriu o número secreto');
    }else{
        if(numeroSecreto > chute){
            exibirTextoNaTela('p', 'O número secreto é maior!');
        }
        else{
            exibirTextoNaTela('p', 'O número secreto é menor!');
        }
    }
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}
````

## 03. Contando tentativas
- Falta exibir o número de tentativas
- Temos que passar um campo para a tela e não o valor direto dentro do paragrafo.
- javaScript nao é tipado.
- Ajustamos para mostrar de forma correta uma escrita com a quantidade de tentativas.

````javaScript

let numeroSecreto = gerarNumeroAleatorio();
//let numeroSecreto = 5;
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
}

exibirTextoNaTela('h1', 'Jogo do número secreto.');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute(){
    let chute = document.querySelector('input').value;
    //console.log(numeroSecreto == chute);
    if(numeroSecreto == chute){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagemTentativas =` Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; 
        exibirTextoNaTela('p', mensagemTentativas);
    }else{
        if(numeroSecreto > chute){
            exibirTextoNaTela('p', 'O número secreto é maior!');
        }
        else{
            exibirTextoNaTela('p', 'O número secreto é menor!');
        }
        tentativas++;
    }
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}
`````

## 04. Botão reiniciar
- Vamos limpar o campo do chute input da tela.
- Criamos a função limparCampo();

````javascript
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
````
- Vamos ativar o botao Novo Jogo, pois ele está desabilitado direto no html.
- Queremos que o javaScript ative ele
- Utilizamos o seguinte contexto:

````javaScript
	document.getElementById('reiniciar').removeAttribute('disabled');
`````

- Ao testarmos o jogo agora, oprocesso flui de maneira mais simples, habilitando o novo jogo.


## 05. Reiniciando o Jogo
- Vamos dar vida para o botão novo jogo
- Vamos no HTML e vamos adicionar uma função ao botão novo jovo.
- Precisa do abre e fecha paraenteses para indicar função
- ciramos a função reiniciarJogo() onde colocmaos ela no botão conforme abaixo:

````html
<button onclick="reiniciarJogo()" id="reiniciar" class="container__botao" disabled>Novo jogo</button>
````

````javaScript
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;

    exibirTextoNaTela('h1', 'Jogo do número secreto.');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
````

- Criamos uma função na tela, para mostrar as mensagens de forma especifica, através de uma função

````javaScript
function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto.');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

mensagemInicial();
````

- Também voltamos o status do botão ao iniciar um novo jogo. Queremos sempre que ele fique desabilitado ao mudar o botão. 
- document.getElementById('reiniciar').setAttribute('disabled',true);

## 06. Calculadora de Média e Situação do Aluno
- Programa que calcula a média
	- calcularMedia(nota1, nota2, nota3, nota4)=> Esta função recebe as quatro notas do aluno como parâmetros e retorna a média calculada com base nessas notas.
	- verificarAprovacao(media) => Esta função recebe a média do aluno como parâmetro e retorna "Aprovado" se a média for maior ou igual a 5, caso contrário, retorna "Reprovado".

````javaScript
let nota1 = 7;
let nota2 = 6;
let nota3 = 3;
let nota4 = 5;
`````

- Respostas

````javaScript
function verificarAprovacao(media) {
    return media >= 5 ? "Aprovado" : "Reprovado";
}

function calcularMedia(nota1, nota2, nota3, nota4) {
  let media = (nota1 + nota2 + nota3 + nota4) / 4;
  return media;
}
`````

## 07. Desafio: hora da prática
- Desafio:

````javaScript

//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
console.log(calcularIMC(80, 1.60));
function calcularIMC(peso, altura){
    return peso/(altura*2);
}

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
console.log(fatorial(4));
function fatorial(numero){
    let fatorial = numero;
    for(x = fatorial-1; x > 0; x--){    
        fatorial = fatorial * x;
    }
    return fatorial;
}

//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
console.log(cotacao(1, 4.8));
function cotacao(real, dolar){
    return real * dolar;
}

//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
console.log(perimetroRetangular(10, 12));
function perimetroRetangular(altura, largura){
    return 2 * (largura + altura);
}

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
console.log(perimetroCirculo(6));
function perimetroCirculo(raio){
    return 2 * Math.PI * 3,14;
}

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
tabuada(10);
function tabuada(numero){
    let tabuada = numero;
    for(x = 1; x <= 10; x++){
        console.log(x*numero);
    }    
}
````

## 08. O que aprendemos?
- Aprendemos a criar um programa e verificar se o chute inserido é igual a um numero sorteado
- Riamos uma variavel para armazenar quantidade de de tenativas
- Importancia da ocumentação de uma determinada linguagem