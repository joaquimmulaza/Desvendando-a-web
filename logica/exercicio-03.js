//ALGORITMO QUE CALCULA A SOMA DOS NUMEROS QUE NAO SAO MULTIPLOS DE 13

function calcularMUltiplos(valor1, valor2) {
    let soma = 0
    if(valor1 > valor2) {
        var novoValor1 = valor2;
        var novoValor2 = valor1;
    } else {
        var novoValor1 = valor1;
        var novoValor2 = valor2;
    }
    for(i = novoValor1; i <= novoValor2; i++){
        if(i % 13 !== 0) {
            soma = soma + i;
        }
    }
    console.log(soma)
}

calcularMUltiplos(100, 200)