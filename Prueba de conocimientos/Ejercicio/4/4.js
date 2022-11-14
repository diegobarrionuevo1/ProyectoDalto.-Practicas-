const arr = ()=>{
    const cantidad = prompt("Introduzca la cantidad de numeros:")
    if (cantidad <= 0){
        alert ("Por favor introduzca una cantidad mayor a 0")
        return arr ()
    }

    let numeros = []
    for (let i = 0; i < cantidad ; i++ ){
        let num = prompt (`Introduzca un numero:`)
        numeros.push(Number(num))
    }
    return numeros
}

let numeros = arr ()
let mayor = numeros[0]
let menor = numeros[0]

for (let i of numeros){
    if (numeros[i] >= mayor){
        mayor = numeros[i]
    }
    if (numeros[i] <= menor ){
        menor = numeros[i] 
    }
}

alert (`El numero mayor es: ${mayor} \n El numero menor es: ${menor}`)