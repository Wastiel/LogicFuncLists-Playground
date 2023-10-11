# Aula 01. Listas

## 01. Projeto da aula anterior
- [Aula zip 03](https://github.com/alura-cursos/js-curso-2/archive/refs/heads/aula_3.zip)
- [Arquivos Github](https://github.com/alura-cursos/js-curso-2/tree/aula_3)


## 02. Documentação sobre listas
- Jogo em si ja está bem completo
- Não sortear um número que já saiu.
- Array javaScript, uma lista de frutas
- A maioria das linguagens usam [] para tratar de listas
- Documetnação javaScript
	- [Documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)
	- Exemplo:
	````javaScript
	var frutas = ["Maçã", "Banana"];
	console.log(frutas.length);
	`````
- numeros.length no de uma lista, mostra o tamanho total da lista
- mostrar um elemento da lista, console.log(frutas[0]), com isto mostrariamos maça na tela.
- lista mostra o elemento a partir do 0.
- indice não marcado, mostra undefined
- Vamos colocar no nosso projeto uma lista de números ja sorteados.

## 03. Implementando a lista
- Comum usar console para o jogo
- Vamos gerar um controle para não gerar o mesmo número.
- Ajustamos a função geraNumeroAleatorio
	
	````javaScript
	function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    if(listasNumerosSorteads.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listasNumerosSorteads.push(numeroEscolhido);
        return numeroEscolhido;
    }
    //return parseInt(Math.random() * 10 + 1);
	}
	`````
- Nesta função, temos uma recursão, função chamado a própria função
- Temos um problema ao acabar os numeros com a função recursiva, temos um erro que vamos corrigir na proxima aula.

## 04. Limitando os números sorteados
- Geramos todos os números da lista
- Ajustamos a função para validar a quantidade de numeros da lista e também a quantidade parametrizada de números que podemos jogar. 
````javaScript
function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    if(listasNumerosSorteads.length() == numeroLimite){
        listasNumerosSorteads = [];
    }
    if(listasNumerosSorteads.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listasNumerosSorteads.push(numeroEscolhido);
        return numeroEscolhido;
    }
    //return parseInt(Math.random() * 10 + 1);
}
`````
## 05. Manipulação de Listas em JavaScript
- Temos a Lista abaixo:
````javaScript
let listaCompras = [];

listaCompras.push("Maçã");
listaCompras.push("Arroz");
listaCompras.push("Leite");
listaCompras.push("Pão");
listaCompras.push("Carne");
````

- Respostas:
	- listaCompras.lengthexibe a quantidade de elementos de uma lista.
	- O código listaCompras[3] vai exibir o item Pão.

## 06. Para saber mais: vamos ler mais sobre listas?
- Criando um array:
	- let frutas = ["Maçã", "Uva", "Laranja"];
- Acessando valores:
	- console.log(frutas[0]); // Saída: "Maçã"
	- console.log(frutas[2]); // Saída: "Laranja"
- Adicionando novos elementos
	- frutas.push("Morango");
	- console.log(frutas); // Saída: ["Maçã", "Uva", "Laranja", "Morango"]
- Removendo o último elemento
	- frutas.pop();
	console.log(frutas); // Saída: ["Maçã", "Uva", "Laranja"]

- Lista de linguagens de programação que usam arrays:
	- JavaScript
	- Python
	- Java
	- C++
	- C#
	- Ruby
	- PHP
	- Swift
	- Kotlin
	- Go

## 07. Desafio: hora da prática
- Desafio:
- Fiz os desafios um pouco diferentes do proposto. Peguei a lista que já estava pronta e amostrei as posições da própria lista.

````javaScript
/*
Crie uma lista vazia, com o nome listaGenerica.
Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
*/

let listaGenerica = [];
let linguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin', 'Python'];

linguagensDeProgramacao.push('java','ruby','Golang');

console.log(linguagensDeProgramacao[5]);
console.log(linguagensDeProgramacao[6]);
console.log(linguagensDeProgramacao[7]);
`````

## 08. O que aprendemos?
- Aprendemos a melhorar o código existente
- criamos 