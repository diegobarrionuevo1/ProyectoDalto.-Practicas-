
//---------------datos tarjeta de informacion---------------- 

let datos = [
    {
        "imagen": "imagenes/teclado.jpg",
        "titulo": "Teclados para entusiastas.",
        "descripcion" : "En el mundo de los teclados existen varias categorías de teclados a los que un usuario puede aspirar.Primero tenemos el típico teclado de membrana que es el que tiene la mayoría de las personas. Estos teclados cumplen al 100% con la función de nuestro querido periférico y generalmente apuntan a ser lo mas económico posible. \n En el siguiente escalón se encuentran los teclados mecánicos, que están muy relacionados con el mundo de los videojuegos el mundo Gaming. Estos teclados son muy buenos para jugar, valen mucho la pena y se caracterizan por: \n - Tener un tacto muy distinto   \n - Mejorar mucho la experiencia en el uso cotidiano \n - ser muy resistentes \n - ser muy precisos. \nDe estos teclados puedes encontrar una infinidad de marcas y modelos, se encuentran fácilmente en cualquier tienda de informática o tecnología en general. \n A partir de ahí, en el siguiente nivel se encuentran los “teclados para entusiastas”. Son teclados mecánicos pero que tienen muchísima mejor calidad, mejores teclas, mejores acabados, mejores materiales, etc. Se caracterizan por su robustez y calidad de construcción.",
        "moreInfo" : "#",
        "orientacion" : "izquierda"
    },
    {
        "imagen": "imagenes/teclado.jpg",
        "titulo": "guille",
        "descripcion" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsa cumque ea, doloremque dicta sit culpa velit voluptatibus",
        "moreInfo" : "#",
        "orientacion" : "derecha"
    },
    {
        "imagen": "imagenes/teclado.jpg",
        "titulo": "Blablablabla",
        "descripcion" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsa cumque ea, doloremque dicta sit culpa velit voluptatibus",
        "moreInfo" : "#",
        "orientacion" : "izquierda"
    },
    {
        "imagen": "imagenes/teclado.jpg",
        "titulo": "Blablablabla",
        "descripcion" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsa cumque ea, doloremque dicta sit culpa velit voluptatibus",
        "moreInfo" : "#",
        "orientacion" : "derecha"
    },
    {
        "imagen": "imagenes/teclado.jpg",
        "titulo": "Blablablabla",
        "descripcion" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsa cumque ea, doloremque dicta sit culpa velit voluptatibus",
        "moreInfo" : "#",
        "orientacion" : "izquierda"
    },
    {
        "imagen": "imagenes/teclado.jpg",
        "titulo": "Blablablabla",
        "descripcion" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsa cumque ea, doloremque dicta sit culpa velit voluptatibus",
        "moreInfo" : "#",
        "orientacion" : "derecha"
    }
]

//-------------------------------------------Crear tarjeta de info-----------------------------------

const crearTarjetaDeInfo = (imagen,tit,descrip,moreInfo,orientacion) =>{
    const seccion = document.createElement ("SECTION")
    const container = document.createElement("DIV")
    //Imagen
    const imagenContainer = document.createElement("DIV")
    const foto = document.createElement("IMG")
    //detalle rojo
    const detalleImagen = document.createElement("DIV")
    //texto
    const textContainer = document.createElement("DIV")
    const titulo = document.createElement("H1")
    const descripcion = document.createElement("P")
    //botones
    const botonesContainer = document.createElement("DIV")
    const botonLeer = document.createElement("DIV")
    const botonComprar = document.createElement("DIV")

    //-----------------------------agregamos el contenido
    foto.setAttribute ("src", "../" + imagen);
    titulo.textContent = tit;
    descripcion.textContent = descrip;
    botonLeer.textContent = "Leer mas";
    botonComprar.textContent = "Comprar";

    //-----------------------------creamos la jerarquia

    seccion.appendChild (container)
    container.appendChild (imagenContainer)
    imagenContainer.appendChild (foto)
    container.appendChild (detalleImagen)
    container.appendChild (textContainer)
    textContainer.appendChild (titulo)
    textContainer.appendChild (descripcion)
    container.appendChild (botonesContainer)
    botonesContainer.appendChild (botonLeer)
    botonesContainer.appendChild (botonComprar)

    //-----------------------------agregamos clases

    container.classList.add ("container");
    //imagen
    imagenContainer.classList.add ("imagenContainer");
    foto.classList.add ("imagenTarjeta");
    //detalle
    detalleImagen.classList.add ("detalleImagen");
    //texto
    textContainer.classList.add ("textContainer");
    titulo.classList.add ("tituloTarjeta");
    descripcion.classList.add ("descripcionTarjeta");
    //botones
    botonesContainer.classList.add ("botonesContainer");
    botonLeer.classList.add ("btn");
    botonComprar.classList.add ("btn");

    return seccion;
} 

let fragmentoTarjeta = document.createDocumentFragment();

for (let i = 0; i < datos.length ; i++){
    let tarjeta = crearTarjetaDeInfo(datos[i].imagen,datos[i].titulo,datos[i].descripcion)
    fragmentoTarjeta.appendChild (tarjeta)
}

document.body.appendChild (fragmentoTarjeta);
