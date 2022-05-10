function interagir1() {
    let nome = window.prompt("Digite seu nome:");
    let message = document.querySelector("p");
    message.textContent = `Muito ter você aqui ${nome}!`;
}