// EXERCÍCIO 08 - FILTER - NOTAS
// Considere o array de notas: [4, 7, 8, 5, 9, 6, 10].
// Utilize filter() para criar um novo array somente com notas maiores ou iguais a 7.
//
// Escreva sua solução abaixo:

const notas = [4, 7, 8, 5, 9, 6, 10];

const notasMaioresQue6 = notas.filter(nota => nota > 6);

console.log("Notas originais:", notas);
console.log("Notas maiores que 6:", notasMaioresQue6);
