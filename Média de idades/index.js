function somamedia() {
    var idade1 = parseInt(document.querySelector('#crianca1').value);
    var idade2 = parseInt(document.querySelector('#crianca2').value);
    var soma = idade1 + idade2;
    var media = soma / 2;

    console.log('Soma: ' + soma);
    console.log('Media: ' + media);
}