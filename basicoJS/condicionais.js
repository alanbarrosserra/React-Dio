/* Condicionais JS:
    - if
    - else
    - switch
    - ternario

    Operadores Logicos JS:
    &&  AND
    ||  OR
    == Igual
    === Igual com validação de tipo
    != !=== DIFERENTE
    > Maior que
    < Menor que

*/
const idade = 18;
const nota = 7;

if (idade > 18) {
    console.log("Maior que 18");
} else if (idade == 18) {
    console.log("Igual a 18");
} else {
    console.log("Menor que 18");
}
/*switch (nota) {
    case > 7:
        console.log("Acima da Media");
        break;
    case < 7:
        console.log("Abaixo da Media");
        break;
    default:
        console.log("Na Media");
}*/

//ternario
nota > 6 ? console.log("aprovado") : console.log("reprovado");

