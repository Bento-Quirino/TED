import { Ala, Consultorio, Paciente } from "./types";

export function create(size: number): Array<any> {
  return [...new Array(size)];
}

export function insert(item: any, queue: Array<any>) {
  const emptySpace = queue.indexOf(undefined);
  if (emptySpace === -1) {
    console.log("ERRO, SEM ESPAÇO");
    return;
  }
  console.log("ITEM INSERIDO");
  queue[emptySpace] = item;
}

export function remove(queue: Array<any>) {
  const removedItem = queue[0];

  // Anda com todos para frente
  for (let i = 0; i < queue.length; i++) {
    queue[i] = queue[i + 1];
  }

  return removedItem;
}
