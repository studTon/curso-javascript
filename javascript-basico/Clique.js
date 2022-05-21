let apertos = 0;
function clique() {
    apertos++;
    let messagem = document.querySelector("p");
    messagem.textContent = `O total de cliques foi ${apertos}`
}
function zerar() {
    apertos = 0;
    let deletar = document.querySelector("p");
    deletar.textContent = null;
}