let coordenadas = [];
let cantidad = parseInt(prompt("Ingresar la cantidad de coordenadas que deseas:"));

const cargaDeArray = (cantidad)=>{
    let fragmento = document.createDocumentFragment();
    for (let i = 0 ; i<cantidad ; i++){
        coordenadas.push([(Math.random()*90+1).toFixed(1),( Math.random()*180+1).toFixed(1) ]);
        let parrafo = document.createElement("P");
        parrafo.innerHTML =`Coordenada ${i+1}:  <br> Y = ${coordenadas[i][1]} <br>  X = ${coordenadas[i][0]}`;
        fragmento.appendChild(parrafo);
        console.log(typeof(coordenadas[i][1]))
    }
    document.body.appendChild(fragmento);
}

cargaDeArray(cantidad)


//------------------ANTES TENIA ESTE CODIGO-------------------------

/* let coordenadas = [];
let cantidad = Number(prompt("Ingresar la cantidad de coordenadas que deseas:"));

const cargaDeArray = (cantidad)=>{
    let fragmento = document.createDocumentFragment();
    for (let i = 0 ; i<cantidad ; i++){
        coordenadas.push([Math.random()*90+1, Math.random()*180+1 ]);
        let texto = document.createTextNode(`Coordenada ${i+1}:   Y = ${coordenadas[i][1]} \n X = ${coordenadas[i][0]}`);
        fragmento.appendChild(texto);
    }
    document.body.appendChild(fragmento);
}

cargaDeArray(cantidad) */


//Me aconsejaste usar parseInt() en vez de Number para trabajar con numeros
//Con este codigo tuve problemas con los saltos de linea del resultado
//Tambien tuve que buscar el metodo toFixed para dejar 1 solo decimal