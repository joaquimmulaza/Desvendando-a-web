//ALGORITMO QUE LE UM NUMERO E MOSTRA 6 NUMEROS IMPARES

let QUANTIDADE = 6;

function mostrarNumerosImpares(valor){
    let novoValor = valor
    for(let i = 0; i < QUANTIDADE;){
        if(novoValor % 2 !== 0) {
            console.log(novoValor)
            i++
        }
        novoValor++
    }
}

mostrarNumerosImpares(9)