// EXERCÍCIO 30 - SIMULANDO RESPOSTA DE API
// Crie um objeto resposta com as propriedades sucesso, mensagem e dados.
// A propriedade dados deve conter um array com dois produtos.
// Converta a resposta para JSON e depois converta novamente para objeto.
// Mostre a mensagem e os produtos recebidos.
//
// Escreva sua solução abaixo:

const resposta = {
    sucesso: true,
    mensagem: "Produtos recebidos com sucesso!",
    dados: [
        {
            nome: "Notebook",
            preco: 3500
        },
        {
            nome: "Mouse",
            preco: 80
        }
    ]
};

// Converte o objeto para JSON
const respostaJSON = JSON.stringify(resposta);

// Converte o JSON novamente para objeto
const respostaObjeto = JSON.parse(respostaJSON);

// Mostra a mensagem
console.log(respostaObjeto.mensagem);

// Mostra os produtos recebidos
console.log(respostaObjeto.dados);
