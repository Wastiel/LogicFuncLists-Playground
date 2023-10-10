
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