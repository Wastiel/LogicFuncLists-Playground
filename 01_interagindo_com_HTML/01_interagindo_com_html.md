# Aula 01. Interagindo com HTML

## 01. Apresentação
- Curso, usamos bastante alert e prompt
- Como conseguir interagir como colocar nosso projeto no ar e mostrar para outras pessoas.

## 02. Preparando o ambiente
- [Projeto base para as atividades](https://caelum-online-public.s3.amazonaws.com/3271-programacao/js-curso-2-aula1.zip)
- [VS code](https://code.visualstudio.com/)
- Projeto mais dinamico e mais vivo
- HTML vai ter poouca alteração, o que vai alterar mais é o javaScript
- Maniplar o texto do h1 da pagina index.html

## 03. Manipulando textos
- Manipular dados no html, enao ficar usando alerts para la e para cá.
- document.querySelector(h1), vai buscar o elemento do arquivo html.
- Titulo.innerHTML = "Seta algo na escrita daquele campo".
	como o próprio innerHTML diz, ele serve para setar algo, dentro daquele html
- "O interessante sobre o JavaScript é que os atributos e propriedades nativos da linguagem, geralmente deixam claro sua funcionalidade ao ser traduzidos."
- Abaixo as demais alterações que criamos

````javascript
let titulo = document.querySelector('h1');
titulo.innerHTML = "Jogo do número secreto";

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = "Escolha um número entre 1 e 10";
`````

## 04. Criando uma função
- Clicar no chtar e ver algo no console.
- HTML precisa chamar algo quando o botão for clicado.
- <button onclick="verificarChute()" class="container__botao">Chutar</button>
- função - Trecho de código que tem alguma responsabilidade.
- Nomenclatura é importante
- Proximos passos, mergulhar em funções e começar a trabalhar nosso projeto.

````javascript
let titulo = document.querySelector('h1');
titulo.innerHTML = "Jogo do número secreto";

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = "Escolha um número entre 1 e 10";

function verificarChute(){
    console.log("o botão foi clicado");
}
````
## 05. Manipulando conteúdo HTML com JavaScript
- Qual código JavaScript você usaria para alterar o texto exibido no cabeçalho da sua página (elemento h1) para Bem-vindo ao mundo dev?

- let titulo = document.querySelector('h1')
titulo.innerHTML = 'Bem-vindo ao mundo dev'


## 06. Para saber mais: diferenças entre HTML, CSS e JS
- HTML, utilizada para estruturar o texto
- CSS ele separa a apresentação da estrutura, responsável pela estilização
- JavaScript, unica linguagem de programação. Traz dinamismo a página
- [Artigo complementar para leitura](https://www.alura.com.br/artigos/html-css-e-js-definicoes?_gl=1*1kdtxoh*_ga*MTA2Njc5NzMwNS4xNjc4Mjc2NDU2*_ga_1EPWSW3PCS*MTY5Njg5NjQ3OS4zOS4xLjE2OTY5MDAzMzkuMC4wLjA.*_fplc*ZWwzZ0NoJTJGOTdxS1ElMkZjMUhzNnpVd2Y2aDNxTm1qcFRLeVhNbDl5T0FOcGk4aHM5ZWJhSUpldG04bkRZZGxJdWhmdzBUcU16RSUyRkxVdTVQSXdEdkFzTUVMc0Y1YXZTb1RjV2N4bVJJVyUyQiUyQmRsRW9xZTY1anFoYktRcDl0dUtaUSUzRCUzRA..)

## 07. Desafio: hora da prática
- [Outro projeto para o desafio](https://github.com/alura-cursos/js-curso-2/tree/desafio_1)
- 

- index.html
````html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <header>
        <h1></h1>
    </header>
    <main class="container">
        <button onclick="verificaBotao()" class="button">Console</button>
        <button onclick="verificaAlerta()" class="button">Alert</button>
        <button onclick="nomeCidade()" class="button">Prompt</button>
        <button onclick="soma()" class="button">Soma</button>
    </main>

      <script src="app.js"></script>
</body>
</html>
````

- app.js
````javascript
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
````


## 08. O que aprendemos?
- Carregamos o projeto
- Aprendemos a maniuplar o conteudo dos HTML's
- Entendemos a importancia da interação enter o HTML e o JavaScript.


