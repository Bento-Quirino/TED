import { bye, hello, createQueue, enqueue } from "./fila.js"

hello() // Hello, I am a queue!

// Agora SÓ falta:
// - Criar uma fila
const fila = createQueue()
console.log(fila)
// - Inserir elementos na fila
enqueue(fila, 'Ted')
console.log(fila)
// - Remover elementos da fila
// - Verificar se a fila está vazia
// - Aumentar o tamanho da fila
// - Diminuir o tamanho da fila
// - Verificar o tamanho da fila
// - Limpar a fila
// - Verificar o primeiro elemento da fila
// - Verificar o último elemento da fila
// - Verificar se um elemento está na fila
// - Verificar a posição de um elemento na fila
// - Verificar se a fila está cheia

bye() // Bye, I was a queue!