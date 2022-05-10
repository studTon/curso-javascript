function media() {
    let nome = prompt("Digite o nome do aluno:")
    let notaA = parseFloat(prompt("Qual o valor da primeira nota de "+ nome +"?"));
    let notaB = parseFloat(prompt("Qual o valor da sua segunda nota?"));
    let media = (notaA + notaB)/2;
    let resultado = document.querySelector("p");
    resultado.textContent = `A média final de ${nome} foi de ${media}`;
}