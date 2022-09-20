// SELECIONAR PALAVRAS QUE COMECEM COM AS DUAS PRIMEIRAS LETRAS ESCOLHIDAS.

const primeiraLetra = "a"
const segundaLetra = "v"
let palavras = ["aceia", "manha", "are"]

let combinacoes = [];

for (const letra of palavras) {
    if (letra[0] == primeiraLetra && letra[1] == segundaLetra) {
        combinacoes.push(letra);
        console.log(letra);
    }
};

combinacoes == 0 ? console.log("ELIMINADO") : true;











