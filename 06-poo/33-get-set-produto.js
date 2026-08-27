// EXERCÍCIO 33 - GETTERS E SETTERS
// Crie uma classe Produto com o campo privado #preco.
// Crie get preco e set preco. O setter não deve aceitar valores negativos.
// Crie um produto, altere o preço e mostre o resultado.
//
// Escreva sua solução abaixo:

class Produto {
    #preco;

    constructor(preco) {
        this.#preco = preco;
    }

    get preco() {
        return this.#preco;
    }

    set preco(novoPreco) {
        if (novoPreco >= 0) {
            this.#preco = novoPreco;
        } else {
            console.log("O preço não pode ser negativo!");
        }
    }
}

const produto = new Produto(100);

produto.preco = 150;

console.log("Preço do produto: R$ " + produto.preco.toFixed(2));
