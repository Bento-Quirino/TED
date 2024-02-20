import { criarPilha, inserirItem } from './pilha.js' // Chamando do outro arquivo

console.log("Meu arquivo index.js") // Print, mostrar dados
const pilha = criarPilha(3) // Criando com tamanho X
console.log(pilha)
inserirItem(pilha, "seu nome")