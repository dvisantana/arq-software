function newTurma(codigo, nota) {
    return {
      codigo,
      nota,
      aprovado: function () {
        return this.nota >= 6;
      }
    };
}
  
module.exports = { newTurma };
  