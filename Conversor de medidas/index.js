function calculo (){
    var temp = parseInt(document.querySelector('#temperatura').value);
    var result = (temp * 1.8) +32;
    alert('A temperatura em Fahrenheit: '  + result);
}