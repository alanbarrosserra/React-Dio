

function subtrair(num1, num2){
    return num1 - num2;
}
const menos = (num1, num2) => num1 - num2;

function somar(num1, num2){
    return num1 + num2;
}

const mais = (num1, num2) => num1 + num2;

const resultado = somar(10,5);
console.log("function = ",resultado);
console.log("arrow = ",mais(10,5));
console.log("arrow = ",menos(10,5));

