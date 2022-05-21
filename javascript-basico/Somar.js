function somar() {
    alert("Bem vindo ao site somador!");
    let num1 = parseFloat(prompt("Digite um número:"));
    let num2 = parseFloat(prompt("Digite outro número:"));
    let resultado = num1 + num2;
    let mensagem = document.querySelector("p");
    mensagem.textContent = `A soma entre ${num1} e ${num2} é igual a ${resultado}`;
}