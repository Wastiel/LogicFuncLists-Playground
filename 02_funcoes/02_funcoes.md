# Aula 02. Funções

## 01. Projeto da aula anterior
- [Aula 01 zip](https://github.com/alura-cursos/js-curso-2/archive/refs/heads/aula_1.zip)
- [Arquivos no Github](https://github.com/alura-cursos/js-curso-2/tree/aula_1)

## 02. Funções com parâmetros
- No titulo pegamos o h1
- No paragrafo eu pego o paragrafo
- A unica diferença é a tag que estamos selecionando
- Diferena é o texto
- Evitar repetição decódigo
	- Temos os seguintes códigos repetidos
		- let titulo = document.querySelector('h1');
		titulo.innerHTML = "Jogo do número secreto";

		- let paragrafo = document.querySelector('p');
		paragrafo.innerHTML = "Escolha um número entre 1 e 10";
- A ideia é diminuir este código, em um cenário de 300 Tags html no nosso código.
- Uma prática boa do jeito que foi feito. Vamos começar a trabalhar de uma maneira mais limpa

````javascript
//let titulo = document.querySelector('h1');
//titulo.innerHTML = "Jogo do número secreto";

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = "Escolha um número entre 1 e 10";

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
}

exibirTextoNaTela('h1', 'Jogo do número secreto.');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute(){
    console.log("o botão foi clicado");
}
````

- Ele le linha a linha
- O java script vai ser executado quando chamado. 
- A function fica esperando para ser executada.
- Com parametro e sem parametro


## 03. Funções com retorno
- Fizemos dois tipos de funções
- Agora vamos gerar um novo número aleatório.
- Montamos a a função que gera o número aleatório
	- return parseInt(Math.random() * 10 + 1);
- Função sem parametro e sem retorno
- Função com parametro sem retorno
- Função sem parametro e com retorno
- A função que criamos, temos que chamar ela armazenando ela em algum lugar.
- Atribuimos funções para as variaveis

````javascript

let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
}

exibirTextoNaTela('h1', 'Jogo do número secreto.');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute(){
    console.log("o botão foi clicado");
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}
````

## 04. Tipo booleano
- Colocar entre 1 e 10 no campo impute
- Clicar no chutar, pegar o valor do input e comparar com o numero secreto
- Vamos pegar o valor do input com a seguinte propriedade
	- let chute = document.querySelector('input').value;

````javascript
let chute = document.querySelector('input').value;
````

- Vamos comparar chute com o numeroSecreto, com igual ==
- False me java script, tipo boolean
	- Bagagem das variaveis, aprendemos diversos tipos
- Vamos validar se a sentença de comparação é verdadira e na próxima aula vamos exibir na tela o resultado.

````javascript

let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
}

exibirTextoNaTela('h1', 'Jogo do número secreto.');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(numeroSecreto == chute);
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}
````

## 05. Anatomia de uma função
- Com base no que vimos nesta aula, analise as afirmações abaixo e marque apenas as opções verdadeiras sobre funções.

- Parênteses (): Após o nome da função (se houver), os parênteses são usados para definir os parâmetros da função.
- Palavra-chave function: É usada para declarar uma função em JavaScript.
- As funções em JavaScript podem ter um nome.

## 06. Função que verifica números
- Implementar uma function para fazer as validações abaixo:
	- Se o número for maior que zero, a mensagem deve ser: "O número é positivo."
	- Se o número for menor que zero, a mensagem deve ser: "O número é negativo."
	- Se o número for igual a zero, a mensagem deve ser: "O número é zero."

````javascript
function verificarNumero(numero) {
  if (numero > 0) {
    console.log("O número é positivo.");
  } else if (numero < 0) {
    console.log("O número é negativo.");
  } else {
    console.log("O número é zero.");
  }
}
````

## 07. Para saber mais: funções com JavaScript
- Desempenham papel central na programação, permitindo encapuslar blocos de codigo retuilizaveis e executaveis.

| Tipo de Função           | Exemplo de Código                                      | Uso                                               |
|--------------------------|--------------------------------------------------------|---------------------------------------------------|
| Sem retorno e sem parâmetro | `function saudacao() { ... }`                          | Execução de bloco de código simples.             |
| Sem retorno e com parâmetro | `function cumprimentar(nome) { ... }`                   | Execução de bloco de código com argumentos.       |
| Com retorno e sem parâmetro | `function gerarNumeroAleatorio() { ... }`              | Cálculo e retorno de um valor específico.         |
| Com retorno e com parâmetro | `function somar(a, b) { ... }`                          | Cálculo e retorno baseado em argumentos.          |
| Função anônima           | `let saudacao = function() { ... };`                   | Definição de função sem nome localmente.          |
| Arrow function           | `let quadrado = x => x * x;`                           | Definição concisa de funções curtas.              |


## 08. Desafio: hora da prática
- Desafio:

```javascript
//Criar uma função que exibe "Olá, mundo!" no console.
function olaMundo(){
    console.log('Olá Mundo');
}

olaMundo();

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
let nome = "Willian";

function nome(nome){
    console.log(`Olá ${nome}`);
}
nome(nome);

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function numeroDobro(numeroDobro){
    return numeroDobro *2;
}
let numeroDobro = numeroDobro(5);
console.log(numeroDobro);

//Criar uma função que recebe três números como parâmetros e retorna a média deles.

function media(numero1, numero2, numero3){
    return (numero1 + numero2 + numero3) /3;
}

let media = media(1,2,3);
console.log(media);


//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function Maior(numero1, numero2){
    return (numero1 > numero2) ? numero1 : numero2;
}

let maior = maior(1,3);
console.log(maior);

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function numeroDobro(numero1){
    return numero1 * numero1;
}

let dobro = numeroDoboro(3);
console.log(dobro);
````
## 09. O que aprendemos?
- Criamos uma função javaScript que recebe 2 parametros
- Utilizmos a palavra-chave return em uma função
- Compreendemos a diferenta entre as funções de retorno, sem retorno e a demais.
- vimos como parametros e retornos são importantes na construção da função.