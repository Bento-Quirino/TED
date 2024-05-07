import { Paciente, Ala } from "./types";
import * as queue from "./fila";

const pacientes: Paciente[] = [
  {
    nome: "Alan Turing",
    setor: "Clínico Geral",
  },
  {
    nome: "Ada Lovelace",
    setor: "Ortopedista",
  },
  {
    nome: "Grace Hopper",
    setor: "Cardiologista",
  },
  {
    nome: "Brasil",
    setor: "Clínico Geral",
  },
  {
    nome: "Margaret Hamilton",
    setor: "Clínico Geral",
  },
  {
    nome: "Tim Berners-Lee",
    setor: "Cardiologista",
  },
];

function triagem(paciente: Paciente) {
  const prioridades = ["emergência", "urgente", "preferencial", "comum"];
  const prioridade =
    prioridades[Math.floor(Math.random() * prioridades.length)];

  paciente.prioridade = prioridade;
  return paciente;
}

const consultorio: Ala[] = [
  {
    nome: "triagem",
    fila: pacientes,
  },
  {
    nome: "Clínico Geral",
    fila: queue.create(5),
  },
  {
    nome: "Cardiologista",
    fila: queue.create(5),
  },
  {
    nome: "Ortopedista",
    fila: queue.create(5),
  },
];

function triar(pacientes: Paciente[]) {
  // ANDA PELA TRIAGEM TODA
  for (let i = 0; i < pacientes.length; i++) {
    // PASSA UM PACIENTE PELA TRIAGEM, E RECEBE UMA PRIORIDADE
    const pacienteTriado = triagem(pacientes[i]);

    // COLOCAR NA FILA DO SETOR
    if (pacienteTriado.setor === "Clínico Geral") {
      queue.insert(pacienteTriado, consultorio[1].fila); // INSERE
      queue.remove(pacientes); // RETIRO DA TRIAGEM
      return;
    }
    if (pacienteTriado.setor === "Ortopedista") {
      queue.insert(pacienteTriado, consultorio[3].fila);
      queue.remove(pacientes);
    }
  }
}
