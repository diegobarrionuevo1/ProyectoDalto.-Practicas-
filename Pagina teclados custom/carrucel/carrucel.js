/*    <section class="container_carrucel">
        <div class="carrucel" id="carrucel">
            <div class="slider__seccion">
                <img class="slider__imagen" src="../imagenes/C1.jpg" alt="">
                <div class="slider__texto seccion__contenido--tarjeta">
                    <h4 class="titulo__blanco texto">BOOK YOUR PARTY NOW</h4>
                    <a class="boton__enTextoLink1"href="tel:03-6434-9693"><div class="boton__enTexto1">BOOK NOW</div></a>
                </div>

            </div>
            <div class="slider__seccion">
                <img class="slider__imagen" src="../imagenes/C2.jpg" alt="">
                <div class="slider__texto seccion__contenido--tarjeta">
                    <h4 class="titulo__blanco texto">SERVING PREMIUM MEXICAN TEQUILA</h4>
                    <p class="titulo__negro blanco texto">PREMIERING AT CHILES AND NEW TO JAPAN</p>
                    <a class="boton__enTextoLink" href="tequila.html"><div class="boton__enTexto">MEXICAN TEQUILA</div></a>
                </div>
            </div>
            <div class="slider__seccion">
                <img class="slider__imagen" src="../imagenes/C3.jpg" alt="">
                <div class="slider__texto seccion__contenido--tarjeta">
                    <h4 class="titulo__blanco texto">TACO TUESDAY ALL ¥550 </h4>
                    <p class="titulo__negro blanco texto">EVERY TUESDAY ALL DRINKS AND TACOS ¥550</p>
                </div>
            </div>
            <svg class="boton__carrucel boton__carrucel--left" id="boton--left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 41"><path d="M20.3 40.8L0 20.5 20.3.2l.7.7L1.3 20.5 21 40.1z"></path></svg>
            <svg class="boton__carrucel boton__carrucel--rigth" id="boton--rigth" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 41"><path d="M20.3 40.8L0 20.5 20.3.2l.7.7L1.3 20.5 21 40.1z"></path></svg>
        </div>
    </section>*/ 

let urlFotos = [
    "../imagenes/C1.jpg",
    "../imagenes/C2.jpg",
    "../imagenes/C3.jpg"
]


let container_principal = document.createElement("SECTION")
//lo agrego al DOM
document.body.appendChild(container_principal)
container_principal.classList.add ("container_carrucel")

let carrucel = document.createElement("DIV")
carrucel.classList.add("carrucel")
carrucel.setAttribute("id","carrucel")

container_principal.appendChild(carrucel)

//-------------------Carga dinamica de imagenes

for (let i = 0 ; i < urlFotos.length; i++){
    let elemento = document.createElement("DIV")
    elemento.classList.add("slider__seccion")

    let foto = document.createElement("IMG")
    foto.setAttribute("src", urlFotos[i])
    foto.classList.add("slider__imagen")

    elemento.appendChild(foto)
    carrucel.appendChild(elemento)
}

//--------------------agrego flechitas

let flechita = document.createElement("DIV")
flechita.innerHTML = `<svg class="boton__carrucel boton__carrucel--left" id="boton--left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 41"><path d="M20.3 40.8L0 20.5 20.3.2l.7.7L1.3 20.5 21 40.1z"></path></svg>`
carrucel.appendChild(flechita)

let flechita_2 = document.createElement("DIV")
flechita_2.innerHTML = `<svg class="boton__carrucel boton__carrucel--rigth" id="boton--rigth" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 41"><path d="M20.3 40.8L0 20.5 20.3.2l.7.7L1.3 20.5 21 40.1z"></path></svg>`
carrucel.appendChild(flechita_2)

let flechi = document.createElement("I")
flechi.classList.add ("fa-solid", "fa-angle-right","icono__next")
carrucel.appendChild(flechi)

/*<i class="fa-solid fa-angle-right"></i> */
let flechi_2 = document.createElement("DIV")
flechi_2.innerHTML = `<svg class="boton__carrucel boton__carrucel--rigth" id="boton--rigth" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 41"><path d="M20.3 40.8L0 20.5 20.3.2l.7.7L1.3 20.5 21 40.1z"></path></svg>`


/* bandera anti clicks */
let bandera = false;


const slider = document.querySelector ("#carrucel");
let sliderSection = document.querySelectorAll (".slider__seccion");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const botonLeft = document.querySelector ("#boton--left")
const botonRigth = document.querySelector ("#boton--rigth")

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next () {
    if(bandera){
        return
    }
    else { 
    let sliderSectionFirst = document.querySelectorAll (".slider__seccion")[0];
    slider.style.marginLeft = "-200%";
    /*     animacion */
    
    // "transform cubic-bezier(.87,0,.13,1)";
    slider.style.transition = "all 3s cubic-bezier(.87,0,.13,1)";
    /* bandera anti clicks */
    bandera = true
    /* esto es para cambiar de lugar las imagenes */ 
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        slider.style.marginLeft = "-100%";
        bandera = false;
    }, 3000);}
}

function Prev () {
    if(bandera){
        return
    }
    else{
        let sliderSection = document.querySelectorAll (".slider__seccion");
        let sliderSectionLast = sliderSection[sliderSection.length -1];
        slider.style.marginLeft = "0%";
        slider.style.transition = "all 3s";
        /* bandera  anti clicks */
        bandera = true;
        /* esto es para cambiar de lugar las imagenes */
        setTimeout(function(){
            slider.style.transition = "none";
            slider.insertAdjacentElement("afterbegin", sliderSectionLast);
            slider.style.marginLeft = "-100%";
            bandera = false;
        }, 3000);
    }
}

/* ´´´´´´´´´´´´next automatico''''''''''''''' */

let idInterval = setInterval(Next,7000);


let idTimeOut = null
/* botones next y prev*/

botonRigth.addEventListener("click", function (){
    Next();

    /*corte next automatico */
    clearInterval(idInterval);
    idInterval = null;   /* se limpia la variable para que aloje un nuevo intervalo */

    /* ``````porque si se configuro otro intervalo Timeout se rompre ````*/
    if (idTimeOut){
        clearTimeout(idTimeOut);
        idTimeOut = null;
    };
    /* despues de este tiempo se vuelve a activar el next automatico */
    idTimeOut = setTimeout(function(){
                    /* porque si se configuro otro intervalo se rompre */
                    if (!idInterval) {
                        idInterval = setInterval(Next,7000);
                    }
                    
                },10000);
});

botonLeft.addEventListener("click", function (){
    Prev();
    /*corte next automatico */
    clearInterval(idInterval);
    idInterval = null;   /* se limpia la variable para que aloje un nuevo intervalo */

    /* porque si se configuro otro intervalo se rompre */
    if (idTimeOut){
        clearTimeout(idTimeOut);
        idTimeOut = null;
    };
    /* despues de este tiempo se vuelve a activar el next automatico */
    idTimeOut = setTimeout(function(){
                    /* porque si se configuro otro intervalo se rompre */
                    if (!idInterval) {
                        idInterval = setInterval(Next,7000);
                    }
                    
                },10000);
});
