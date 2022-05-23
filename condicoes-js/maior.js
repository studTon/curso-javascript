function maiorValor() {
    let mensagem = document.querySelector("div");
    let valorA = parseFloat(prompt("Digite o primeiro valor:"));
    let valorB = parseFloat(prompt("Digite o segundo valor:"));
    if (valorA == valorB) {
        mensagem.innerHTML = `<p>Os valores são iguais</p>`;
    } else if(valorA > valorB){
        mensagem.innerHTML = `<p>O número ${valorA} é maior</p>`;
    } else {
        mensagem.innerHTML = `<p>O número ${valorB} é maior</p>`;
    }
}