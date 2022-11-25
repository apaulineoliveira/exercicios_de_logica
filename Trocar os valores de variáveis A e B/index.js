function generate() {
    var a = document.getElementById('num-a').value;
    var b = document.getElementById('num-b').value;

    var c = b;
    var b = a;
    var a = c;

    console.log('Variável A: ' + a);
    console.log('Variável B: ' + b);
}
