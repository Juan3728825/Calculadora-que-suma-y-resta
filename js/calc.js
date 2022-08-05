var operacion;
let bton0 = document.getElementById('id0');
let bton1 = document.getElementById('id1');
let bton2 = document.getElementById('id2');
let bton3 = document.getElementById('id3');
let bton4 = document.getElementById('id4');
let bton5 = document.getElementById('id5');
let bton6 = document.getElementById('id6');
let bton7 = document.getElementById('id7');
let bton8 = document.getElementById('id8');
let bton9 = document.getElementById('id9');
let suma = document.getElementById('suma');
let resta = document.getElementById('resta');
let igual = document.getElementById('igual');
let resultado = document.getElementById('resultado');
let oculto = document.getElementById('oculto');

bton0.addEventListener('click', function () {
    if (resultado.value != 0) {
        resultado.value = resultado.value + 0;
    }
})
bton1.addEventListener('click', function () {
    let bton1 = document.getElementById('id1');
    resultado.value = resultado.value + 1;
})
bton2.addEventListener('click', function () {
    let bton2 = document.getElementById('id2');
    resultado.value = resultado.value + 2;
})
bton3.addEventListener('click', function () {
    let bton3 = document.getElementById('id3');
    resultado.value = resultado.value + 3;
})
bton4.addEventListener('click', function () {
    let bton4 = document.getElementById('id4');
    resultado.value = resultado.value + 4;
})
bton5.addEventListener('click', function () {
    let bton5 = document.getElementById('id5');
    resultado.value = resultado.value + 5;
})
bton6.addEventListener('click', function () {
    let bton6 = document.getElementById('id6');
    resultado.value = resultado.value + 6;
})
bton7.addEventListener('click', function () {
    let bton7 = document.getElementById('id7');
    resultado.value = resultado.value + 7;
})
bton8.addEventListener('click', function () {
    let bton8 = document.getElementById('id8');
    resultado.value = resultado.value + 8;
})
bton9.addEventListener('click', function () {
    let bton9 = document.getElementById('id9');
    resultado.value = resultado.value + 9;
})

suma.addEventListener('click', function () {
    operacion = 'suma';
    let resultado = document.getElementById('resultado');
    let oculto = document.getElementById('oculto');
    oculto.value = resultado.value;
    resultado.value = ' ';
})

resta.addEventListener('click', function () {
    operacion = 'resta';
    let resultado = document.getElementById('resultado');
    let oculto = document.getElementById('oculto');
    oculto.value = resultado.value;
    resultado.value = ' ';
})

igual.addEventListener('click', function () {
    let oculto = document.getElementById('oculto');
    let resultado = document.getElementById('resultado');
    if (operacion == 'suma') {
        let suma = parseInt(oculto.value) + parseInt(resultado.value);
        resultado.value = suma;
        console.log("suma");
    }

    if (operacion == 'resta') {
        let resta = parseInt(oculto.value) - parseInt(resultado.value);
        resultado.value = resta;
        console.log("resta");
    }
})





