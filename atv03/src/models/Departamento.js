const Funcionario = require('./Funcionario');

class Departamento extends Funcionario {
    constructor(nome) {
        super();
        this.nome = nome;
        this.funcionarios = [];
    }

    adicionarFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
    }

    removerFuncionario(funcionario) {
        const index = this.funcionarios.indexOf(funcionario);
        if (index !== -1) {
            this.funcionarios.splice(index, 1);
        }
    }

    exibirInformacoes() {
        console.log(`\nDepartamento: ${this.nome}`);
        this.funcionarios.forEach(funcionario => {
            funcionario.exibirInformacoes();
        });
    }

    calcularSalarioTotal() {
        let salarioTotal = 0;
        this.funcionarios.forEach(funcionario => {
            salarioTotal += funcionario.calcularSalarioTotal();
        });
        return salarioTotal;
    }
}

module.exports = Departamento;
