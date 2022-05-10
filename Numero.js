function pedirNumero() {
    let numero = prompt("Digite um número qualquer:");
    let dobro = 2 * numero;
    let metade = numero / 2;
    let message = document.querySelector("p");
    message.textContent = `O número ${numero} tem como dobro ${dobro} e metade ${metade}.`;
}