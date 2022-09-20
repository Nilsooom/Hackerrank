// quantidade de ponstos de um time em uma competição.

const resultados = ["V", "E", "V", "E", "D"]

let pontuacao = 0;

for (let pontos of resultados) {
    if (pontos === "E") { pontuacao++ }
    else if (pontos === "V") { pontuacao += 3 }
};

console.log(pontuacao)