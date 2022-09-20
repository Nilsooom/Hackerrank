//TIRO AO ALVO - MINIMO DE 3 DISPAROS ACIMA DE 70 PONTOS

const disparos = [0, 60, 70, 70, 80, 30];

let pontuacao = 0;

for (const pontos of disparos) {
    if (pontos >= 70) { pontuacao++ }
};

pontuacao >= 3 ? console.log(pontuacao) : console.log("ELIMINADO");
