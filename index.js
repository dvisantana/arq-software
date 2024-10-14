const { newAluno } = require('./models/aluno');
const { newTurmaPresencial } = require('./models/turmaPresencial');

const verde = '\x1b[32m';
const vermelho = '\x1b[31m';
const reset = '\x1b[0m';

const aluno1 = newAluno('Davi Santana', 'davisantana', '2411350');
const turma1 = newTurmaPresencial('ES61', 10, 100);

if(turma1.aprovado()){
    console.log(`${aluno1.nome} foi ${verde}aprovado${reset}!`);
}else{
    console.log(`${aluno1.nome} foi ${vermelho}reprovado${reset}!`);
}