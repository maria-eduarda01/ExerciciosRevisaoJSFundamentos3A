// EXERCÍCIO 29 - ARRAY EM JSON
// Crie um array com três objetos de usuários contendo id, nome e email.
// Converta o array para JSON e mostre o resultado.
//
// Escreva sua solução abaixo:

const usuarios = [
    {
        id: 1,
        nome: "Maria",
        email: "maria@email.com"
    },
    {
        id: 2,
        nome: "Bianca",
        email: "bianca@email.com"
    },
    {
        id: 3,
        nome: "Melissa",
        email: "melissa@email.com"
    }
];

const usuariosJSON = JSON.stringify(usuarios);

console.log(usuariosJSON);
