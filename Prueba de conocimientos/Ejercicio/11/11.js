let dias = prompt ("¿Que cantidad de dias haz vivido?")
let tiempo = (dias)=>{
    let años = 0;
    let meses = 0;
    let termino = false;
    while (termino == false){
        if (dias >= 365){
            dias -= 365;
            años++;
        } else if (dias>31){
            dias -= 31;
            meses++;
        }
        else {
            termino = true;
        }
    }
    alert (`Ha vivido ${años} años, ${meses} meses y ${dias} días.`)
}

tiempo (dias);