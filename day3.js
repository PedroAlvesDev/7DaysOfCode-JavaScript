alert('Bem-vindo ao Jogo da Escolha!');

const escolha = prompt('Deseja seguir para área de Front-End ou Back-End ?');

if (escolha === 'Front-End') {
    prompt('Deseja aprender React ou Vue ?');
} else if (escolha === 'Back-End') {
    prompt('Deseja aprender C# ou Java ?');
} else {
    alert('Valor inválido!');
};

const caminho = prompt('Voce deseja se especializar na área escolhida ou seguir se desenvolvendo para se tornar Fullstack ?');

if (caminho === 'especializar') {
    alert('Foco é importante! Especialização é uma excelente escolha!');
} else if (caminho === 'Fullstack') {
    alert('Expandir suas habilidades é sempre uma boa ideia! Fullstack é muito valorizado!');
} else {
    alert('Valor inválido!');
};

let msg = prompt('Tem mais alguma tecnologia que gostaria de aprender? Digite "ok" em caso positivo.');
while (msg === 'ok') {
    let novaTecnologia = prompt('Qual tecnologia?');
    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`);
    msg = prompt('Tem mais alguma tecnologia que gostaria de aprender? Digite "ok" EM caso positivo.');
};