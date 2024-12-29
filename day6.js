let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let remover = '';

let msg = 'SIM';

while (msg != 'NÃO') {
    if (frutas.length === 0 && laticinios.length === 0 && congelados.length === 0 && doces.length === 0) {
        msg = prompt('Deseja adicionar uma comida na sua lista de compras? Respoda com SIM ou NÃO.');
    } else {
        msg = prompt('Deseja adicionar uma comida na sua lista de compras? Respoda com SIM, NÃO ou REMOVER');
    };

    while (msg != 'SIM' && msg != 'NÃO' && msg != 'REMOVER') {
        alert('Valor inválido!');
        msg = prompt('Deseja adicionar uma comida na sua lista de compras? Respoda com SIM ou NÃO.');
        if (msg == 'NÃO') {
            break;
        };
    };

    if (msg == 'SIM') {
        let comida = (prompt('Qual comida deseja inserir?'));
        let categoria = prompt('Em qual categoria essa comida se encaixa? (Frutas, Laticínios, Congelados ou Doces)');

        if (categoria == 'Frutas') {
            comida = frutas.push(`${comida}`);
        } else if (categoria == 'Laticinios') {
            comida = laticinios.push(`${comida}`);
        } else if (categoria == 'Congelados') {
            comida = congelados.push(`${comida}`);
        } else if (categoria == 'Doces') {
            comida = doces.push(`${comida}`);
        } else {
            alert('Categoria inválida!');
        };
    } else if (msg == 'REMOVER') {
        if (frutas.length === 0 && laticinios.length === 0 && congelados.length === 0 && doces.length === 0) {
            alert('A lista está vazia!');
        } else {
            remover = prompt(`Lista de Compras:\n Frutas: ${frutas}\n Laticínios: ${laticinios}\n Congelados: ${congelados}\n Doces: ${doces}\n \n Qual item deseja remover?`);

            if (frutas.indexOf(remover) != -1) {
                frutas.splice(frutas.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`);
            } else if (laticinios.indexOf(remover) != -1) {
                laticinios.splice(laticinios.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`);
            } else if (congelados.indexOf(remover) != -1) {
                congelados.splice(congelados.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`);
            } else if (doces.indexOf(remover) != -1) {
                doces.splice(doces.indexOf(remover), 1);
            } else {
                alert(`Item não encontrado dentro da lista!`);
            };
        };
    };
};
alert(`Lista de Compras:\n Frutas: ${frutas}\n Laticinios: ${laticinios}\n Congelados: ${congelados}\n Doces: ${doces}`);