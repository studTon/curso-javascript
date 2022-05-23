function analisar() {
    let resultado = document.querySelector("div");
    let agora = new Date;
    let dias = new Array ('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb');
    let meses = new Array ('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez');
    let segundos = agora.getSeconds();
    let minutos = agora.getMinutes();
    let horas = agora.getHours();
    let dia = agora.getDate();
    let mes = agora.getMonth();
    let ano = agora.getFullYear();
    let diaSem = agora.getDay();

    resultado.innerHTML = `<p>Data: ${agora}</p>`
    resultado.innerHTML += `<p>Dia da semana: ${dias[diaSem]}</p>`
    resultado.innerHTML += `<p>Dia: ${dia}</p>`
    resultado.innerHTML += `<p>Mês: ${meses[mes]}</p>`
    resultado.innerHTML += `<p>Horas: ${horas}</p>`
    resultado.innerHTML += `<p>Minutos: ${minutos}</p>`
    resultado.innerHTML += `<p>Segundos: ${segundos}</p>`
    resultado.innerHTML += `<p>Ano: ${ano}</p>`
}