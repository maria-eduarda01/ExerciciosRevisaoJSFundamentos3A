// EXERCÍCIO 20 - FILTRANDO OBJETOS
// Crie um array com cinco produtos contendo nome e preco.
// Utilize filter() para selecionar apenas os produtos que custam até R$ 100.
// Mostre o novo array.
//
// Escreva sua solução abaixo:

const produtos = [
    { nome: "Mouse", preco: 50 },
    { nome: "Teclado", preco: 100 },
    { nome: "Monitor", preco: 800 },
    { nome: "Fone de ouvido", preco: 80 },
    { nome: "Webcam", preco: 120 }
];

const produtosAte100 = produtos.filter(produto => produto.preco <= 100);

console.log(produtosAte100);
