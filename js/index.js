
let elreferencia = document.getElementById("referencia");
let elquadros = document.getElementById("quadros");
let elBotao = document.getElementById("botao");

let referencia = [];
let quadros = 0;
let faltas =  0;
let saida = 0;

elBotao.onclick = function () {
    referencia = elreferencia.value;
    quadros = elquadros.value;
    simulaFIFO();
}

function simulaFIFO () {
    let memoria = [];
    memoria.length = quadros;

     referencia = [2, 3, 1, 4, 5, 3, 1, 1, 6, 7, 1, 4];
     quadros = 3;

    let cont = 0;

    while (cont !== referencia.length){
        
    cont ++;
    }
    
    document.getElementById("1").innerHTML = referencia;
    document.getElementById("2").innerHTML = quadros;
    document.getElementById("3").innerHTML = faltas;
    document.getElementById("4").innerHTML = saida;
    document.getElementById("5").innerHTML = "Aperte F12 e clique em Console para ver todos os passos";
}
