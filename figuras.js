// Código cuadrado

function perimetroCuadrado (lado) {
    return lado*4;
} 

function areaCuadrado(lado){
    return lado*lado;
} 

// Código del triangulo

function perimetroTriangulo (lado1,lado2,base){
    return lado1+lado2+base
} 

function alturaTriangulo (lado1,base){
    return Math.sqrt((lado1*lado1)-((base/2)*(base/2)))
} 

function areaTriangulo (base,altura){
    return (base*altura)/2
} 

// Código del circulo

function diametroCirculo(radio){
    return radio*2;
} 

const PI = Math.PI;

function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio)
    return diametro*PI
} 

function areaCirculo(radio) {
    return (radio*radio)*PI
} 

function calcularAreaCuadrado() {
    const input = document.getElementById('inputCuadrado')
    const value = input.value

    const area = areaCuadrado(value)
    alert(area)
}

function calcularPerimetroCuadrado() {
    const input = document.getElementById('inputCuadrado')
    const value = input.value

    const perimetro = perimetroCuadrado(value)
    alert(perimetro)
}

function calcularAreaTriangulo () {
    const base = document.getElementById('inputBase')
    const valueBase = base.value
    const altura = document.getElementById('inputAltura')
    const valueAltura = altura.value

    const area = areaTriangulo(valueBase, valueAltura)
    alert(area)
}

function calcularPerimetroTriangulo () {
    const base = document.getElementById('inputBase')
    const valueBase = parseInt(base.value)
    const lado1 = document.getElementById('inputLado1')
    const valueLado1 = parseInt(lado1.value)
    const lado2 = document.getElementById('inputLado2')
    const valueLado2 = parseInt(lado2.value) 

    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase)
    alert(perimetro)
}

function calcularAlturaTriangulo () {
    const base = document.getElementById('inputBase1')
    const valueBase = parseInt(base.value)
    const lado1 = document.getElementById('inputLado11')
    const valueLado1 = parseInt(lado1.value)
    const lado2 = document.getElementById('inputLado21')
    const valueLado2 = parseInt(lado2.value) 

    if((valueLado1==valueLado2) && ((valueLado1)>(valueBase/2))){
        const altura = alturaTriangulo(valueLado1, valueBase)
        alert(altura)
    }
    if((valueLado1)<(valueBase/2)){
        alert("El triangulo no es valido")
    }
    else{
        alert("El triangulo no es isosceles")
    }
    
}

function calcularAreaCircunferencia() {
    const input = document.getElementById('inputCircunferencia')
    const value = input.value

    const area = areaCirculo(value)
    alert(Math.round(area*100)/100)
}

function calcularPerimetroCircunferencia() {
    const input = document.getElementById('inputCircunferencia')
    const value = input.value

    const perimetro = perimetroCirculo(value)
    alert(Math.round(perimetro*100)/100)
}