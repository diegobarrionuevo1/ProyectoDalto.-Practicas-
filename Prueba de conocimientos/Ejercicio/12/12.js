let a = Number(prompt("Ingresar el primer lado"));
let b = Number(prompt("Ingresar el segundo lado"));

//tuve que buscar como hacer la raiz cuadrada

let hipotenusa = (a,b)=>{
    let calc = a**2 + b**2;
    let raiz = Math.sqrt(calc);
    return raiz
}

alert (`La hipotenusa es: ${hipotenusa(a,b)}`)