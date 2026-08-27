// EXERCÍCIO 27 - OBJETO PARA JSON
// Crie um objeto pedido com numero, cliente e valorTotal.
// Converta o objeto para JSON utilizando JSON.stringify()
// e mostre o resultado.
//
// Escreva sua solução abaixo:

const pedido = {
    numero: 12345,
    cliente: "Maria Eduarda",
    valorTotal: 250.50
};

const pedidoJSON = JSON.stringify(pedido);

console.log(pedidoJSON);
