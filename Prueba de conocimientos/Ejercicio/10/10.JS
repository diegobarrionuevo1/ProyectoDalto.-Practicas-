let numero = Math.floor(Math.random()*100 + 1)
//me acorde del metodo pero no me acordaba como usarlo bien
let gano = false
for (let i = 0 ; i < 10 ; i++){
    let eleccion = prompt (`Tienes 10 intentos para adivinar un numero del 1 al 100, llevas ${i} intentos fallidos`)
    if ( eleccion < numero){
        alert("el numero es mayor")
    } else if (eleccion > 100 || eleccion < 1){
        alert ("Era entre el 1 y el 100 salame")
    } else if (eleccion > numero){
        alert( "el numero es menor")
    }
    else {
        alert(`Ganaste!! el numero si era ${numero}`);
        gano = true;
        break;
    }
    if (i == 9 && gano == false){
        alert(`Perdiste salame, suerte para la proxima :). El numero era ${numero}`)
    }
}