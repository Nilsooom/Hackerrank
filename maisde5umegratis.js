// Objetivo: Se comprar mais de 5 itens o intem mais barato sai de graça.

const precos = [100, 500, 100, 100, 200, 2];

let total = 0;
let itemMaisbarato = precos[0];

for (let compras of precos) {
    total += compras;
    if (compras < itemMaisbarato) {
        itemMaisbarato = compras
    };
};

if (precos.length >= 5) {
    console.log(total - itemMaisbarato);
} else { console.log(total) };




