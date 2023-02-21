// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;

let n = parseInt(gets());
while (n != -1) {
  if (n == 0) {
    print(0);
  } else {
    print(--n);
  }
  // TODO: Crie as condições necessárias para resolver o desáfio
  n = parseInt(gets());
}
