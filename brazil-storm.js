//NOTAS DE SURF. ELIMINA A MAIOR E MENOR NOTA.
// A NOTA FINAL É A MEDIA DAS NOTAS QUE SOBRAM.

const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100]

let soma = 0;
for (let n of notas) {
    soma += n
};

let maior = notas[0]
let menor = notas[0]

for (let n of notas) {
    if (n > maior) { maior = n }
    if (n < menor) { menor = n }
};

console.log((soma - maior - menor) / (notas.length - 2));