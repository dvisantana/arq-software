const Funcionario = require('./Funcionario');

class FuncionarioIndividual extends Funcionario {
    constructor(nome, posicao, salario) {
        super();
        this.nome = nome;
        this.posicao = posicao;
        this.salario = salario;
    }

    exibirInformacoes() {
        console.log(`${this.posicao} ${this.nome}: R$ ${this.salario}`);
    }

    calcularSalarioTotal() {
        return this.salario;
    }
}

module.exports = FuncionarioIndividual;
