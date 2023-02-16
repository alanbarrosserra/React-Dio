/* 
- while
- for
- foreach
- map
*/
for(let i = 0; i < 10; i++){
    console.log("i = ",i);
}

let x = 0;
while(x<10){
    console.log("x = ",x);
    x++;
}

const valores = [1,2,3,4,5,6,7,8,9,10];
valores.forEach((value) => {
    console.log("valor = ", value);
})
