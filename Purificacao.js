//O objetivo é remover os caracteres especiais da string corrompida.

const stringCorrompida = "Minh!a$f Rol@a# È Gi&gant%";

let string = "";
let sujeira = "";
for (let caracter of stringCorrompida) {
    if (caracter === "!" || caracter === "@" || caracter === "#" || caracter === "$" ||
        caracter === "%" || caracter === "&" || caracter === "*" || caracter === "(" || caracter === ")") {
        sujeira += caracter
    } else {
        string += caracter
    };

};

console.log(string);
console.log(sujeira);
