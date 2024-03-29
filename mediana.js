const lista1 = [
    100,
    230,
    350,
    360,
    220,
    1200,
    550,
    400000000,
    800
];


function esPar(numerito){
    if(numerito % 2 === 0){
        return true;
    }else {
        return false;
    }
}

function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )

    const promedioLista = sumaLista/lista.length
    return promedioLista;
}

let mediana;
function calcularMediana(lista1){

    const lista = lista1.sort((a,b) => a-b);
    console.log(lista)

    const mitadLista = parseInt(lista.length/2)


    if(esPar(lista.length)){
        const elemento1 = lista[mitadLista - 1]
        const elemento2 = lista[mitadLista]
    
        const promedioElementos = calcularMediaAritmetica([
            elemento1,
            elemento2
        ])
        mediana = promedioElementos;
    
    
    }else{
        mediana = lista[mitadLista]
    }

    return mediana;
}

calcularMediana(lista1)

console.log("Mediana igual a: " + mediana + " Unidades")