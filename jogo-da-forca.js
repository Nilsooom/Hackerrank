//JOGO DA FORCA - QUANTIDADE DE ACERTOS

const palpite = "e"
const palavra = "abelha"



let acertos = 0;

for (letra of palavra) {
    if (letra === palpite) { acertos++ }
};

console.log(acertos)

