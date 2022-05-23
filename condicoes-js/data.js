function tempo() {
    let mensagem = document.querySelector("div");
    let agora = new Date;
    mensagem.innerHTML = `<p>Agora é ${agora}</p>`;
}