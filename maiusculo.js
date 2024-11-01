// Função para adicionar nomes
function adicionarNomes() {
    const nomes = [];
    let nome;

    // Loop para adicionar nomes até que o usuário digite 'sair'
    while (true) {
        nome = prompt("Digite um nome (ou 'sair' para finalizar):");
        if (nome.toLowerCase() === 'sair') break;
        nomes.push(nome);
    }

    // Converter os nomes para caixa alta
    const nomesEmCaixaAlta = nomes.map(nome => nome.toUpperCase());

    // Exibir o resultado
    console.log(nomesEmCaixaAlta);
}

// Chamar a função
adicionarNomes();
