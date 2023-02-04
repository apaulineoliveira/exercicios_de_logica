const notas = [10, 9, 7, 8, 5, 2];
let soma = 0;
    for (let item of notas) {       
         soma  = soma + item;
}

console.log(soma/notas.length);