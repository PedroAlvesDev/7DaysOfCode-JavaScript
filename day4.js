alert('Seja bem-vindo! Será que você consegue adivinhar o número que estou pensando ?');
alert('Uma dica, é um número entre 0 e 10. Você tem 3 tentativas. Boa Sorte!!!');

const numeroSecreto = parseInt(Math.random() * 10 + 1);
console.log(numeroSecreto);
let chute;
let acertou = false;

for (let i = 1; i <= 3; i++) {
    const chute = prompt('Qual valor que você deseja chutar?');

    if (chute == numeroSecreto) {
        alert(`Parabens, você acertou o número secreto ${numeroSecreto}!`);
        acertou = true;
        break;
    } else {
        alert('Número errado!');
    };
};

if (!acertou) {
    alert(`Que pena, você não acertou. O número secreto era ${numeroSecreto}.`);
};