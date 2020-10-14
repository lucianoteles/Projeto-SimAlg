
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
    referencia = [2, 3, 1, 4, 5, 3, 1, 1, 6, 7, 1, 4];
     quadros = 3;



    let memoria = [0, 0, 0];

    let x = 0;
    let cont = 0;


    while (cont !== 12){
                while (x !== 12){
                        for(var i = 0; i < quadros; i++){
                            
    
                                    if(referencia[x] !== memoria[0] && referencia[x] !== memoria[1] && referencia[x] !== memoria[2] ){
                                        faltas++

                                        if(memoria[0] == 0){
                                            memoria.push(referencia[x])
                                            memoria.shift()
                                            console.log(memoria);
                                            
                                        }
                                        else if(memoria[1] == 0){
                                            memoria.push(referencia[x])
                                            memoria.shift()
                                            console.log(memoria);
                                            
                                        }
                                        else if(memoria[2] == 0){
                                            memoria.push(referencia[x])
                                            memoria.shift()
                                            console.log(memoria);
                                            
                                        }
                                        else if(referencia[x] !== memoria[0] || referencia[x] !== memoria[1]||referencia[x] !== memoria[2]) {
                                            memoria.shift()
                                            memoria.push(referencia[x])
                                            console.log(memoria);
                                        }
                                    }
    
                                        
                                }
                                x++ 
                        }
               
               
                        cont ++        
            }

            
    

    saida = memoria

    document.getElementById("1").innerHTML = referencia;
    document.getElementById("2").innerHTML = quadros;
    document.getElementById("3").innerHTML = faltas;
    document.getElementById("4").innerHTML = saida;
    document.getElementById("5").innerHTML = "Aperte F12 e clique em Console para ver todos os passos";

}


