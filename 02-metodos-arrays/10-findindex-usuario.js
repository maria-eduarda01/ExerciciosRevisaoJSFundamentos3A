// EXERCÍCIO 10 - FINDINDEX - USUÁRIO
// Crie um array com os nomes: Ana, Carlos, Beatriz e Daniel.
// Utilize findIndex() para descobrir a posição de "Beatriz".
// Mostre o índice encontrado.
//
// Escreva sua solução abaixo:

const usuarios = ["Duda", "Maria", "Eduarda", "Madu"];

const indice = usuarios.findIndex(usuario => usuario === "Maria");

console.log("Índice de Maria:", indice);
