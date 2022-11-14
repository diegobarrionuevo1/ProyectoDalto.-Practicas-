
//para este ejercicio hay que descomentar o comentar en el html todo el svg y su contenedor



let container = document.getElementById ("reloj_container")
let horas = document.getElementById("horas");
let minutos = document.getElementById("minutos");
let segundos =document.getElementById("segundos");

container.style.maxHeight = "100vh"
container.style.width = "100vh"
container.style.display = "flex"
container.style.alignItems = "center"
segundos.style.fill = "red"
//esto para que se muevan bien las agujitas realmente no renegue, lo googlee en 2 min
horas.style.transformOrigin = "center"
minutos.style.transformOrigin = "center"
segundos.style.transformOrigin = "center"

let actualizar = (h,m,s)=>{
    let actual = new Date();
    let hor = actual.getHours()
    let min = actual.getMinutes()
    let seg = actual.getSeconds()
    console.log ( hor,min,seg)
    h.style.transform = `rotateZ(${256+15*hor}deg)`;
    m.style.transform = `rotateZ(${282+6*min}deg)`;
    s.style.transform = `rotateZ(${277+6*seg}deg)`;
    // esto porque se movian re mal y era porque la posicion inicial no eran 0º entonces las acomode maome jeje
}



setInterval(() => {
    actualizar (horas,minutos,segundos)
}, 500);