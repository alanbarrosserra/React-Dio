// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
let tweet = gets();

// TODO: Crie as outras condições necessárias para a resolução do desafio.
if(tweet.length > 140){
    print("MUTE");
}else{
    print("TWEET");
}