// Aplicado o Método de Extração
// Isso evita a duplicação de código, já que a soma dos valores é usada tanto no cálculo da média quanto no cálculo do desvio padrão. 
function calcularSoma(valores) {
    return valores.reduce((soma, valor) => soma + valor, 0);
}

// Aplicando o Inline Method
// A utilização de métodos em linha torna o código mais conciso, especialmente quando a operação realizada é simples e não precisa ser reutilizada em outros lugares.
function calcularMedia(valores) {
    let soma = calcularSoma(valores);
    let media = soma / valores.length;
    return media.toFixed(2);
}

// Aplicando a Extração de Variável
// Isso melhora a eficiência do código e evita duplicação desnecessária de lógica.
function calcularDesvioPadrao(valores) {
    let media = calcularMedia(valores);
    let somaDiferencasQuadradas = valores.reduce((soma, valor) => soma + (valor - media) ** 2, 0); // Soma das diferenças quadradas
    let desvioPadrao = Math.sqrt(somaDiferencasQuadradas / valores.length);
    return desvioPadrao.toFixed(2);
}

// ======= Utilizando para testar ======= // 
// let valores = [12, 15, 18, 20, 22];
// console.log("Média: " + calcularMedia(valores));
// console.log("Desvio Padrão: " + calcularDesvioPadrao(valores));
