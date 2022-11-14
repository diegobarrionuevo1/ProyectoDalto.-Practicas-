let num_1 = Number(prompt("Ingresar el numero"));


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
};

let divisor = divisores(num_1);
let bandera = true
for (let i = 0 ; i < divisor.length ; i++){
    if (divisor[i] != 1 && divisor[i] != num_1){
        bandera = false;
    }
};

if (bandera == true){
    alert(`El numero ${num_1} es primo`)
} else{
    alert(`El numero ${num_1} NO es primo`)
}