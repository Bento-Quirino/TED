
/**
 * @module fila
 * 
 * @description This method says hello to the queue.
 * 
 * 
 */
export function hello() {
    console.log('Hello, I am a queue!')
}

/**
 * @module fila
 * 
 * @description This method says bye to the queue and DELETE queue from memory.
 * 
 * 
 */
export function bye() {
    console.log('Bye, I was a queue!')
}

/**
 * @module fila
 * 
 * 
 * @description This method creates a queue.
 */
export function createQueue(size = 10) {
    return [...new Array(size)]
}

/**
 * @module fila
 * 
 * @description This method inserts an element in the queue.
 */
export function enqueue(queue, element) {
    const pos = queue.indexOf(undefined)
    if (pos !== -1) { // Se tiver espaço na fila
        queue[pos] = element
        return
    }

    console.log('Queue is full')
}

/**
 * @module fila
 * 
 * @description This method organize the queue based on the number of pages, from smallest to largest.
 */
export function organizeQueue(queue) {
    return queue.sort((a, b) => a - b)
}