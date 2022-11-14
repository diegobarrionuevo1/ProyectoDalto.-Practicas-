let datos = [
    {
        "nombre" : "Bitcoin",
        "precio" : "17400",
        "cap_de_mercado" : "334000000000",
        "Acciones_en_circulacion" : "19204012"
    },
    {
        "nombre" : "Ethereum",
        "precio" : "1280",
        "cap_de_mercado" : "156999000000",
        "Acciones_en_circulacion" : "122373866"
    },
    {
        "nombre" : "Tether",
        "precio" : "1",
        "cap_de_mercado" : "68300000000",
        "Acciones_en_circulacion" : "68000000000"
    },
    {
        "nombre" : "BNB",
        "precio" : "295",
        "cap_de_mercado" : "47200000000",
        "Acciones_en_circulacion" : "160000000"
    },
    {
        "nombre" : "USD Coin",
        "precio" : "1",
        "cap_de_mercado" : "43900000000",
        "Acciones_en_circulacion" : "44000000000"
    },
    {
        "nombre" : "Binance USD",
        "precio" : "1",
        "cap_de_mercado" : "23000000000",
        "Acciones_en_circulacion" : "23000000000"
    },
    {
        "nombre" : "XRP",
        "precio" : "0.39",
        "cap_de_mercado" : "20000000000",
        "Acciones_en_circulacion" : "50000000000"
    },
    {
        "nombre" : "Cardano",
        "precio" : "0.36",
        "cap_de_mercado" : "12500000000",
        "Acciones_en_circulacion" : "34000000000"
    },
    {
        "nombre" : "Dogecoin",
        "precio" : "0.08845",
        "cap_de_mercado" : "12000000000",
        "Acciones_en_circulacion" : "133000000000"
    },
    {
        "nombre" : "Polygon",
        "precio" : "1.07",
        "cap_de_mercado" : "9000000000",
        "Acciones_en_circulacion" : "9000000000"
    },
    {
        "nombre" : "Polkadot",
        "precio" : "5.84",
        "cap_de_mercado" : "6700000000",
        "Acciones_en_circulacion" : "1000000000"
    },
    {
        "nombre" : "Solana",
        "precio" : "18.07",
        "cap_de_mercado" : "6500000000",
        "Acciones_en_circulacion" : "370000000"
    },
    {
        "nombre" : "Dai",
        "precio" : "1",
        "cap_de_mercado" : "5900000000",
        "Acciones_en_circulacion" : "5900000000"
    },
    {
        "nombre" : "Shiba Inu",
        "precio" : "0.00001014",
        "cap_de_mercado" : "5600000000",
        "Acciones_en_circulacion" : "550000000000000"
    },
    {
        "nombre" : "TRON",
        "precio" : "0.05751",
        "cap_de_mercado" : "5303490",
        "Acciones_en_circulacion" : "92214000000"
    }
];

//quise poner el .json en un archivo aparte pero no se como utilizarlo 
//supongo que deberia tenerlo en un servidor y hacerlo con peticiones, o nose si se pueda
// hacer un import o algo, luego me respondes, jeje.




let contador = 0 // este contador reemplaza a un .lenght que hacia en una coleccion html que funcaba mal nose porque

const mostrar = (dat)=>{
    for (let i = 0 ; i < contador ; i++ ){
        let parrafo = document.getElementById(`p${i}`)
        document.body.removeChild(parrafo);
    } 

    contador = 0 // se restaura el contador para que se remuevan los parrafos correspondientes y que el loop no se haga enorme

    let cosas = document.createDocumentFragment()
    for (let i = 0; i < dat.length ; i++){
        let cosa = document.createElement("P");
        cosa.innerText = `${dat[i].nombre}: \n Precio de la moneda: $ ${dat[i].precio}
        Capitalizacion de mercado: $ ${dat[i].cap_de_mercado}
        Acciones en circulacion: ${dat[i].Acciones_en_circulacion}`
        cosa.setAttribute("id" , `p${i}`)
        cosas.appendChild(cosa);
        contador++
        console.log(contador)
    }
    return cosas;
};



let entrada = document.createElement("INPUT");
entrada.setAttribute("type","search")
entrada.setAttribute("placeholder","Buscar cripto..")
document.body.appendChild(entrada);
//tuve que bucar como era el tema del input porque no me acordaba


document.body.appendChild(mostrar (datos))

entrada.addEventListener("keyup",(e)=>{
    let filtro = datos.filter((valor)=> valor.nombre.toUpperCase().includes(e.target.value.toUpperCase()))
    document.body.appendChild(mostrar(filtro))
}) 
//No me acordaba bien la sintaxis de eventos y la busque
//Busque que evento del teclado necesitaba y me encontre con que keypess esta obsoleto
//No me acordaba de el metodo includes pero sabia que existia un metodo para saber si una cadena incluye
// a la otra
//No sabia como usar filter, me re complico la vida jajajajaj lei por todos lados
//pasa que no supe como hacer la comparacion fuera del filter asi me quedaba mas limpio, osea, entiendo que se puede hacer
//pero no me salio
