// Criar ela com tamanho
export function criarPilha(tamanhoDaPilha = 10) { // Verifico se tem valor,senão, use 10
    // Criar uma array com o tamanho que pediram
    return [...new Array(tamanhoDaPilha)] // Desestruturação
}

// Inserir item
export function inserirItem(pilha, item) {
    // Ver se tem espaço pra inserir (tem undefined)
    const spacePosition = pilha.indexOf(undefined) // Acha o primeiro undefined    
    if(spacePosition === -1) { // Não tem espaço
        console.log('Não tem espaço')
        return
    }    
    // Se tiver espaço, insere no primeiro undefined
    pilha[spacePosition] = item
    // Se não tiver, aumenta o tamanho da pilha, e insere*
}

// Retirar item
export function retirarItem(pilha) {
    // Ver se tem item pra retirar
    // [undefined, undefined, undefined]
    if(pilha[0] === undefined) { // Não tem item
        console.log('Pilha vazia')
        return
    }

    const lastItemPosition = pilha.indexOf(undefined) // Acha o último undefined
    // ["Lucas", "Richard", "Matheus"]
    const selectedItem = pilha[lastItemPosition - 1] // Acha o item anterior ao último undefined
    if(lastItemPosition === -1) { // Não tem espaço
        pilha.pop() // Retira o último item
        return
    }
    // ["Lucas", "Richard", undefined, undefinded]
    pilha.splice(lastItemPosition - 1, 1, undefined)
    return selectedItem

    // vá até o primeiro undefined e retire o item anterior
    // pois o undefined é o espaço vazio
    // e antes dele tem um item
}

//Ver se tem na pilha


// Verifica se está vazia

