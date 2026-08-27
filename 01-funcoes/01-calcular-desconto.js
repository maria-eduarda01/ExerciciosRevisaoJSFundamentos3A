// EXERCÍCIO 01 - CALCULAR DESCONTO
// Crie uma função chamada calcularDesconto que receba o preço de um produto
// e a porcentagem de desconto. A função deve retornar o preço final.
// Teste a função com um produto de R$ 200 e desconto de 10%.
// 
// Saída esperada: Preço final: R$ 180
//
// Escreva sua solução abaixo:

function calcularDesconto(preco, desconto) {
    // const valorDesconto = preco * (desconto/100);
    // const precoFinal = preco - valorDesconto;
    // return precoFinal;
    // ==========================================
    // const precoFinal = preco - (preco * (desconto/100));
    // return precoFinal;
    // ==========================================
    return preco - (preco * (desconto/100));
}

const resultado = calcularDesconto(200, 10);
console.log(`Preço final: ${resultado}`);
