// EXERCÍCIO 03 - CALCULAR MÉDIA
// Crie uma função que receba quatro notas, calcule e retorne a média.
// Mostre o resultado no console.
//
// Escreva sua solução abaixo:

// Escreva sua solução abaixo:
function calcularMedia(nota1, nota2, nota3, nota4) {
    const soma = nota1 + nota2 + nota3 + nota4;
    const media = soma / 4;
    return media;
}

// Mostre o resultado no console:
const resultado = calcularMedia(7, 8, 5, 10);
console.log("A média do aluno é:", resultado);

