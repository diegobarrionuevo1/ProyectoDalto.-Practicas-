let num_1 = Number(prompt("Ingresar el primer numero"));
let num_2 = Number(prompt("Ingresar el segundo numero"));

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

let result_1 = divisores(num_1);
let result_2 = divisores(num_2);
let comunes = [];

console.log(result_1);
console.log(result_2);

for (let i = 0 ; i < result_1.length ; i++){
    if (result_2.includes(result_1[i])){
        comunes.push(result_1[i])
    }
};

if (comunes.length == 0){
    comunes.push("ninguno")
};

alert (`Los divisores comunes son: ${comunes}`);