function aparecePrompt() {
    let area = prompt('Escolha em qual área você deseja seguir: [1] Front-End ou [2] Back-End?');

    if (area == '1') {
        let techFront = prompt('Escolha a opção [1] se quer aprender React ou [2] se quer aprender Vue.');
    } else if (area == '2') {
        let techBack = prompt('Escolha a opção [1] se quer aprender C# ou [2] se quer aprender Java.');
    } else {
        alert('Você não respondeu uma opção válida!');
    };

    let listaTechs = [];

    let fullstack = prompt('Você prefere: [1] seguir se especializando na área escolhida ou [2] seguir se desenvolvendo para se tornar Fullstack?')

    let aprenderMais = prompt('Tem mais alguma tecnologia que gostaria de aprender? [1] Sim ou [2] Não');
    while (aprenderMais == '1') {
        let novaTech = prompt(`Me conte qual tecnologia você quer aprender:`);
        listaTechs.push(novaTech);
        aprenderMais = prompt(`Que legal que quer estudar ${novaTech}! Agora sua lista de aprendizado está assim: ${listaTechs}. Existe mais alguma tech que deseja aprender ? [1] Sim ou [2] Não`);
    }
    alert('Bons estudos para você então!');

}; 