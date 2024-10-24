const { newTurma } = require('./turma');

function newTurmaPresencial(codigo, nota, frequencia) {
  const turma = newTurma(codigo, nota);

  return {
    ...turma,
    frequencia,
    aprovado: function () {
      return turma.aprovado() && this.frequencia >= 75;
    }
  };
}

module.exports = { newTurmaPresencial };
