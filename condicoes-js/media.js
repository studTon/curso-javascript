function calcular() {
    let nome = prompt("Digite o nome do aluno:")
    let notaA = parseFloat(prompt("Qual o valor da primeira nota de "+ nome +"?"));
    let notaB = parseFloat(prompt("Qual o valor da sua segunda nota?"));
    let media = (notaA + notaB)/2;
    let resultado = document.querySelector("div");
    resultado.innerHTML += `<p>A média final de ${nome} foi de ${media}</p>`;
    if (media >= 6.0 && media <= 10) {
        resultado.innerHTML += `<p>Parabéns ${nome}</p>`
    }
    else if (media >= 0 && media < 6) {
        resultado.innerHTML += `<p>Recuperação para ${nome}</p>`
    }
    else{
        resultado.innerHTML += `<p>Algum valor inválido</p>`
    }
}