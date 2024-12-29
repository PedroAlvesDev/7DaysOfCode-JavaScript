let name = prompt('Qual o seu nome?');
let age = prompt('Quantos anos você tem?');
let language = prompt('Qual linguagem de programação você está estudando?');
alert(`Olá ${name}, você tem ${age} anos e já está aprendendo ${language}!`);

let question = prompt(`Você gosta de estudar ${language}? Responda com número 1 para SIM ou 2 para NÃO.`);
if (question == 1) {
    alert('> Muito bom! Continue estudando e você terá muito sucesso.');
} else if (question == 2) {
    alert('> Ahh que pena... Já tentou aprender outras linguagens?');
} else {
    alert('Valor inválido!');
};