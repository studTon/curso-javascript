function sortear() {
    let min = 1;
    let max = 100;
    let diferenca = max - min;
    let aleatorio = Math.random();
    let num = min + Math.trunc(diferenca * aleatorio);
    let resultado = document.querySelector('div');
    resultado.innerHTML = `<p>O número sorteado é ${num}</p>`;
}

function limpar() {
    let trecho = document.querySelector('div');
    trecho.innerHTML = null;
}