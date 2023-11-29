//generar matriz
let matriz = [
    [0,0,0,0]
    [0,0,0,0]
    [0,0,0,0]
    [0,0,0,0]
]

//visualizar matriz
function visualizarMatriz(matriz){
    for (let i=0; i<matriz.length; i++){
        for (let j=0; j<matriz[i].length; j++ ){
            console.log("Posición i: "+i+" j: "+j+" valor: "+matriz[i][j]);
        }
    }
}

window.onload = function Carga(){
    visualizarMatriz(matriz);
}