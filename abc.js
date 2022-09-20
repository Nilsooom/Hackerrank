//Brincadeira Stop. Objetivo mostrar quantas pessoas perderam.

const letra = "m";
const palavras = ["mamao", "maca", "melao", "melancia", "laranja"];


let perdedores = 0;

for (inicial of palavras) {
    if (inicial[0] === letra) {
    } else { perdedores++ }
};

console.log(perdedores)