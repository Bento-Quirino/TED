export interface Paciente {
    nome: string
    setor: string
    prioridade?: string
    // Objeto "Paciente" pode ter ou não o atributo "prioridade", se tiver, tem que ser um dos valores que está acima
}

export interface Ala {
    nome: string
    fila: Paciente[]
}

export interface Consultorio {
    nome: string
    alas: Ala[]
}

let paciente: Paciente = {
    nome: "João",
    setor: "cardiologia",
}