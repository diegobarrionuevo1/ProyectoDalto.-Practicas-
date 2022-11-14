let frenar = true;
let totalCadena = "";
while (frenar == true){
    let concatenar = prompt ("Introduzca una cadena:")
    totalCadena += ` - ${concatenar}`
    if (concatenar.trim().toLocaleLowerCase() == "cancelar"){
        frenar = false;
    }
};

alert (`La cadena resultante es: ${totalCadena}`)