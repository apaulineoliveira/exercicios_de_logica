function calculation(){
    var a = parseInt(document.querySelector('#value1').value);
    var b = parseInt(document.querySelector('#value2').value);
    var selectOperation = document.querySelector('input[name="operation"]:checked').value;
    var nameOperation, calculo;

    if(selectOperation == 'adicao'){
        nameOperation = 'Adição';
        calculo = a + b;
    }
    else if(selectOperation == 'subtracao'){
        nameOperation = 'Subtração';
        calculo = a - b;
    }
    else if(selectOperation == 'multiplicacao'){
        nameOperation = 'Multiplicação';
        calculo = a * b;
    }
    else if(selectOperation == 'divisao'){
        nameOperation = 'Divisão';
        calculo = a / b;
    }
    alert(nameOperation+': '+calculo);
}