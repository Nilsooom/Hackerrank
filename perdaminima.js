const precos = [5, 10, 3]

let comparador = [];

for (let c = 0; c < precos.length; c++) {
    for (let a = c + 1; a < precos.length; a++) {
        comparador.push(precos[c] - precos[a])
    }
}



let menorPerda = 1000000000000;

for (let menor of comparador) {
    if (menor > 0) {
        if (menor < menorPerda) {
            menorPerda = menor;
        }
    }
};


console.log(menorPerda);

