// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
let somaDasNotas = 0;
let contador = 0;

do {
  const notaEntradaConsole = parseFloat(gets());
  if (notaEntradaConsole > 0 && notaEntradaConsole <= 10) {
    contador += 1;
    somaDasNotas += notaEntradaConsole;
  } else {
    print('nota invalida');
  }
} while (contador < 2);
const media = somaDasNotas / 2;
print(`media = ${media.toFixed(2)}`);
