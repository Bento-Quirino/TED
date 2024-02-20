// Criar ela com tamanho
export function criarPilha(tamanhoDaPilha = 10) { // Verifico se tem valor,senão, use 10
    // Criar uma array com o tamanho que pediram
    return [...new Array(tamanhoDaPilha)] // Desestruturação
}

// Inserir item
export function inserirItem(pilha, item) {
    // Ver se tem espaço pra inserir (tem undefined)
        // Se tiver espaço, insere
        // Se não tiver, aumenta o tamanho da pilha, e insere
}

// Retirar item