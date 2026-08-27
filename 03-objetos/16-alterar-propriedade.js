// EXERCÍCIO 16 - ALTERANDO PROPRIEDADE
// Crie um objeto produto com nome, preco e estoque.
// Altere o preço e diminua uma unidade do estoque.
// Mostre o objeto antes e depois das alterações.
//
// Escreva sua solução abaixo:

const produto = {
    nome: "Notebook",
    preco: 2500,
    estoque: 10
};

console.log("Antes:", produto);

// Alterando o preço
produto.preco = 2300;

// Diminuindo uma unidade do estoque
produto.estoque--;

console.log("Depois:", produto);
