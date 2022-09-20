// Os caracteres ">" e "<" movem as imagens para direita e para esquerda respectivamente.
// o programa define qual o indice da imagem parou apos a sequencia de caracteres.


const sequencia = "<";

let imagem = 0;

for (let c of sequencia) {
    if (c === ">") {
        imagem++;
        if (imagem > 6) { imagem = 0 };
    } else if (c === "<") {
        imagem--;
        if (imagem < 0) { imagem = 6 };
    };
};
console.log(imagem)