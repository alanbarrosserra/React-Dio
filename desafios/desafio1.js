// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets()" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print()": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;

//TODO: Complete os espaços em branco
function gets(){
    return "11 7"
}

function print(String){
    console.log(String);
}


let line = gets().split(" ");
let pimentoes_amarelos = parseInt(line[0]); 
let pimentoes_vermelhos = parseInt(line[1]); 
//TODO: Faça a soma do número de pimentões e imprima o resultado
let x = pimentoes_amarelos + pimentoes_vermelhos;
print("X = " + x)
