// EXERCÍCIO 02 - VERIFICAR APROVAÇÃO
// Crie uma função que receba a média de um aluno e retorne
// "Aprovado" quando a média for maior ou igual a 7
// e "Reprovado" nos demais casos.
//
// Escreva sua solução abaixo:
// Escreva sua solução abaixo:
function verificarAprovacao(media) {
    if (media >= 7) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

// Testando a função com diferentes notas
console.log(verificarAprovacao(8));   // Retorna: "Aprovado"
console.log(verificarAprovacao(7));   // Retorna: "Aprovado"
console.log(verificarAprovacao(5.5)); // Retorna: "Reprovado"

