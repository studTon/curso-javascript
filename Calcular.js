function calcular() {
    let numero = prompt("Digite um número:");
    let analise = document.querySelector("p");
    analise.textContent = ``;
    
    let res = document.querySelector("#resultado");
    res.innerHTML = `<p>O número analisado é ${numero}<p><hr>`;
    res.innerHTML += `<p>O valor absoluto é ${Math.abs(numero)}</p>`;
    res.innerHTML += `<p>O valor inteiro é ${Math.trunc(numero)}</p>`;
    res.innerHTML += `<p>O valor mais próximo é ${Math.round(numero)}</p>`;
    res.innerHTML += `<p>A sua raiz quadrada é ${Math.sqrt(numero)}</p>`;
    res.innerHTML += `<p>A sua raiz cúbica é ${Math.cbrt(numero)}</p>`;
    res.innerHTML += `<p>O valor de ${numero}<sup>2</sup> é ${Math.pow(numero,2)}</p>`;
    res.innerHTML += `<p>O valor de ${numero}<sup>3</sup> é ${Math.pow(numero,3)}</p>`;
}