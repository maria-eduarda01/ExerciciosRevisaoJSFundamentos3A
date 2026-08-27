// EXERCÍCIO 19 - ARRAY DE OBJETOS
// Crie um array com três objetos de filmes.
// Cada filme deve possuir titulo, genero e duracao.
// Percorra o array e mostre o título de cada filme.
//
// Escreva sua solução abaixo:

const filmes = [
    {
        titulo: "Invocação do Mal",
        genero: "Terror",
        duracao: 112
    },
    {
        titulo: "Enrolados",
        genero: "Animação",
        duracao: 100
    },
    {
        titulo: "Diário de uma Paixão",
        genero: "Romance",
        duracao: 123
    }
];

filmes.forEach(filme => {
    console.log(filme.titulo);
});
