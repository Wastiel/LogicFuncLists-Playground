
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