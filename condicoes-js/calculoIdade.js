function calcular() {
    let agora = new Date;
    let anoAgora = agora.getFullYear();
    let nascimento = Number(prompt("Em que ano você nasceu?"));
    let idade = anoAgora - nascimento;
    let mensagem = document.querySelector('div');
    mensagem.innerHTML = `<p>Quem nasceu em ${nascimento} faz ${idade} anos.</p>`;
}