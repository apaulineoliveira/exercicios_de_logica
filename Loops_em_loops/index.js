function somarSubVetores(vetor) {
    let resultado = [];

for(let indice = 0; indice < vetor.length; indice ++) {
    let subVetor = vetor[indice];
    let soma = 0;

for(let subIndice = 0; subIndice < subVetor.length; subIndice ++) {
    soma = soma + subVetor[subIndice];
}
    resultado[indice] = soma;
    vetor [indice] = soma;
    }
}