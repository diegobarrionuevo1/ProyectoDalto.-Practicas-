

//--------------------------------------------Crear NAV ------------------------------------------------

const crearNav = () => {
    const encabezado = document.createElement ("HEADER")
    const navContainer = document.createElement ("DIV")
    const iconContainerNav = document.createElement ("DIV")
    const iconMenu = document.createElement ("I")
    const iconClose = document.createElement ("I")
    const menu = document.createElement ("NAV")
    const ulContainer = document.createElement ("UL")
    const liInicio = document.createElement ("LI")
    const liGuia = document.createElement ("LI")
    const liTienda = document.createElement ("LI")
    const linkInicio = document.createElement ("A")
    const linkGuia = document.createElement ("A")
    const linkTienda = document.createElement ("A")

    // contenido
    iconMenu.classList.add ("fa-solid","fa-bars-staggered")
    iconClose.classList.add ("fa-solid","fa-xmark")
    linkInicio.setAttribute("href","#inicio")
    linkGuia.setAttribute("href","#Guia")
    linkTienda.setAttribute("href","#Tienda")
    linkInicio.textContent = "Inicio"
    linkGuia.textContent = "Guia"
    linkTienda.textContent = "Tienda"

    //jerarquia
    encabezado.appendChild (navContainer)
    navContainer.appendChild (iconContainerNav)
    navContainer.appendChild (menu)
    iconContainerNav.appendChild (iconMenu)
    iconContainerNav.appendChild (iconClose)
    menu.appendChild (ulContainer)
    ulContainer.appendChild (liInicio)
    ulContainer.appendChild (liGuia)
    ulContainer.appendChild (liTienda)
    liInicio.appendChild (linkInicio)
    liGuia.appendChild (linkGuia)
    liTienda.appendChild (linkTienda)


    
    // estilos
    iconMenu.classList.add ("menuBtn")
    iconClose.classList.add ("menuBtn","sacar")
    navContainer.classList.add ("navContainer")
    iconContainerNav.classList.add ("iconContainerNav")
    menu.classList.add ("menu")

    //funcionalidad
    iconMenu.addEventListener("click", ()=>{
        menu.style.animation = "aparecer 1s forwards"
        iconMenu.classList.add ("sacar")
        iconClose.classList.remove ("sacar")
    })
    iconClose.addEventListener ("click", ()=>{
        menu.style.animation = "desaparecer 1s forwards"
        iconMenu.classList.remove ("sacar")
        iconClose.classList.add ("sacar")
    })
    return encabezado;
}

let navCreator = crearNav ()
document.body.appendChild (navCreator)




















































