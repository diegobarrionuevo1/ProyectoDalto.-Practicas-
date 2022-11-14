
const arr = ()=>{
    const cantidad = prompt("Introduzca la cantidad de numeros que necesite promediar:")
    let numeros = []
    for (let i = 0; i < cantidad ; i++ ){
        let num = prompt (`Introduzca un numero:`)
        numeros.push(Number(num))
    }
    return numeros
}

const promedio = ()=>{
    let numeros = arr ();
    let acum = 0;
    for (let i = 0 ; i < numeros.length; i++){
        acum += numeros[i];
    };
    alert(`El PROMEDIO ES: ${acum / numeros.length}`)
}

promedio ()