
function tirada (){
        let res = Math.floor(Math.random() *6 + 1)
        return res.toString () ;
    }
let dadoContainer = document.getElementById('result')
let eliminado = false;
function tirarDado(){

    let tiro = tirada()
    num= document.createElement("SPAN");
    num.textContent = tiro;
//    dadoContainer.appendChild(num)
    if (dadoContainer.childElementCount == 0) {
        dadoContainer.appendChild(num);
    } else {
        let hijo = dadoContainer.firstChild;
        dadoContainer.replaceChild(num,hijo);
        if (!eliminado) {
            dadoContainer.removeChild(dadoContainer.lastChild);
            eliminado++;
        };
    }

}

