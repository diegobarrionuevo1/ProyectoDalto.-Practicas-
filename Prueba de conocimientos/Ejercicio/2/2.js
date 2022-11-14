//Para este ejercicio busque la formula para pasar de uno al otro
// y corrobore que no hubiese un metodo especifico que hiciera esto automaticamente


const celsius = (c)=>{
    return (c*1.8)+ 32
}
const fahrenheit = (f)=>{
    return (f*-32)/ 1.8
}

let opciones = prompt ("Elige la opcion que necesite: \n 1 - Celsius a Fahrenheit \n 2 - Fahrenheit a Celsius")

if (opciones == 1){
    let cel = prompt ("Introduzca la temperatura")
    alert (`La conversion es: ${celsius(cel)}º F`)
} else if (opciones == 2){
    let far = prompt ("Introduzca la temperatura")
    alert (`La conversion es: ${fahrenheit(far)}º C`)
}


