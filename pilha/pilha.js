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
export function procurarNaPilha(pilha, item) {
    // Ande a pilha, e procure nela
    for (let i = 0; i < pilha.length; i++) {
        if (pilha[i].ra === item.ra) {
            console.log("Achei o aluno " + item.nome)
            return
        }
    }
    console.log("Não achei o aluno " + item.nome)

    // Se eu achar, retorno true ou um console.log()
    // Se não achar, retorna false ou um console.log()
}

// Verifica se está vazia
export function estaVazia(pilha) {
    if (pilha[0] === undefined) {
        console.log("Está vazia")
        return true
    }

    return false
}
// 10, 11 , 12
export function estaCheia(pilha) {
    if(pilha[(pilha.length - 1)] !== undefined) {
        return true
    }
    return false
}
