function descobrir() {
    let messagem = document.querySelector("div");
    let numero = parseInt(prompt("Digite um número:"));
    if (numero % 2 == 0) {
        messagem.innerHTML = `<p>O número ${numero} é par.</p>`
    } else {
        messagem.innerHTML = `<p>O número ${numero} é ímpar.</p>`
    }
}