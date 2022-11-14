let num_1 = Number(prompt("Ingresar el primer numero"));

//una paja hacer la validacion de que si el hdp mete letras

const divisores = (n) =>{
    let div = 2;
    let arr = [];
    while (div<=n){
        
        if (n % div == 0){
            arr.push(div);
            div++;
        }
        else {
            div++;
        };
    };

    return arr;
} 

alert(divisores(num_1))