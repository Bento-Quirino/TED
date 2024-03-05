import { criarPilha, inserirItem, retirarItem, procurarNaPilha } from './pilha.js' // Chamando do outro arquivo

const listaObjetos = [
    {
        nome: "ALUNO 11",
        ra: '2411',
        idade: 16,
    },
    {
        nome: "ALUNO 12",
        ra: '2412',
        idade: 17,
    },
]

console.log("Meu arquivo index.js") // Print, mostrar dados
const pilha = criarPilha(3) // Criando com tamanho X
console.log(pilha) // Mostra a pilha vazia
inserirItem(pilha, {
    nome: "ALUNO 11",
    ra: '2411',
    idade: 16,
})


// Insira todos os itens da listaObjetos na pilha
procurarNaPilha(pilha, {
    nome: "ALUNO 11",
    ra: '2411',
    idade: 16,
})
// Retire 1

// Mostre a pilha no fim