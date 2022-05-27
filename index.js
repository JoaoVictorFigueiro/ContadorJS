var adicionarValor = document.getElementById("adicionar");
var resetarValor = document.getElementById("resetar");
var retirarValor = document.getElementById("retirar")
var numerais = document.getElementById("contador");

var numeros = 0;

numerais.innerHTML = numeros;

adicionarValor.addEventListener('click', function(){
    numerais.innerHTML = ++numeros;
});

resetarValor.addEventListener('click', function(){
    numerais.innerHTML = numeros = 0;
})

retirarValor.addEventListener('click', function(){
    numerais.innerHTML = -- numeros;
})
