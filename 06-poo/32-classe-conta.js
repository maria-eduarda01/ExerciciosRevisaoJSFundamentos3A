// EXERCÍCIO 32 - ENCAPSULAMENTO
// Crie uma classe ContaBancaria com o campo privado #saldo.
// Crie os métodos depositar(valor), sacar(valor) e consultarSaldo().
// Não permita saque maior que o saldo disponível.
//
// Escreva sua solução abaixo:

class ContaBancaria {
    #saldo;

    constructor(saldoInicial = 0) {
        this.#saldo = saldoInicial;
    }

    depositar(valor) {
        this.#saldo += valor;
    }

    sacar(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
            console.log("Saque realizado com sucesso!");
        } else {
            console.log("Saldo insuficiente!");
        }
    }

    consultarSaldo() {
        return this.#saldo;
    }
}

const conta = new ContaBancaria(1000);

conta.depositar(500);
conta.sacar(300);

console.log("Saldo atual: R$ " + conta.consultarSaldo().toFixed(2));
