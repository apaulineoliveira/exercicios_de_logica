const NOTAS = [10, 9, 5, 2, 4, 7 ];
let notasVermelhas = 0;
    for(let item of NOTAS) {
        if (item < 7) {
            notasVermelhas++;
        }
    }

console.log(notasVermelhas);