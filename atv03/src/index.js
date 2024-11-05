const FuncionarioIndividual = require('./models/FuncionarioIndividual');
const Departamento = require('./models/Departamento');

const funcionario1 = new FuncionarioIndividual("Alice", "Desenvolvedora", 5000);
const funcionario2 = new FuncionarioIndividual("Bob", "Designer", 4000);
const funcionario3 = new FuncionarioIndividual("Carlos", "Gerente", 7000);

const subDepartamentoDesign = new Departamento("Design");
subDepartamentoDesign.adicionarFuncionario(funcionario2);

const departamentoTI = new Departamento("TI");
departamentoTI.adicionarFuncionario(funcionario1);
departamentoTI.adicionarFuncionario(subDepartamentoDesign);

const departamentoPrincipal = new Departamento("Organização");
departamentoPrincipal.adicionarFuncionario(funcionario3);
departamentoPrincipal.adicionarFuncionario(departamentoTI);

departamentoPrincipal.exibirInformacoes();

const salarioTotal = departamentoPrincipal.calcularSalarioTotal();
console.log(`\nSalário total da organização: R$ ${salarioTotal}`);
