const CONSUMO_AUTOMOVEL = 12;

function calcularLitrosGastos(tempoGasto, velocidade) {
    const distancia = (velocidade * tempoGasto) / CONSUMO_AUTOMOVEL
    return distancia.toFixed(3)
}

console.log("Litros gastos " + calcularLitrosGastos(22, 67) + "L")