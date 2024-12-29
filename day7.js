function soma(valor1, valor2) {
    return Number(valor1) + Number(valor2);
};

function subtracao(valor1, valor2) {
    return Number(valor1) - Number(valor2);
};

function multiplicacao(valor1, valor2) {
    return Number(valor1) * Number(valor2);
};

function divisao(valor1, valor2) {
    return Number(valor1) / Number(valor2);
};

let valor1;
let valor2;
let operacao = '';

do {
    operacao = prompt(`Escolha uma operação: soma, subtração, multiplicação, divisão, ou sair.`).toLowerCase();
    while (operacao != 'soma' && operacao != 'subtração' && operacao != 'multiplicação' && operacao != 'divisão' && operacao != 'sair') {
        alert('Operação inválida!');
        operacao = prompt(`Escolha uma operação: soma, subtração, multiplicação, divisão, ou sair.`);
    };

    if (operacao === 'sair') {
        break;
    };

    valor1 = prompt('Digite o primeiro valor:');
    valor2 = prompt('Digite o segundo valor:');
    
    switch (operacao) {
        case 'soma':
            alert(`O resultado da ${operacao} é ${soma(valor1, valor2)}`);
            break;
        case 'subtração':
            alert(`O resultado da ${operacao} é ${subtracao(valor1, valor2)}`);
            break;
        case 'multiplicação':
            alert(`o resultado da ${operacao} é ${multiplicacao(valor1, valor2)}`);
            break;
        case 'divisão':
            alert(`O resulta da ${operacao} é ${divisao(valor1, valor2)}`);
            break;
    };
} while (operacao === 'soma' || operacao === 'subtração' || operacao === 'multiplicação' || operacao === 'divisão');
alert(`Até a próxima!`);
