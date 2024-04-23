interface Paciente {
    nome: string
    setor: string
    prioridade?: "emergency" | "urgent" | "preferential" | "normal"
}

interface Ala {
    nome: string
    fila: Paciente[]
}

interface Consultorio {
    nome: string
    pacientes: Paciente[]
    alas: Ala[]
}

let paciente: Paciente = {
    nome: "João",
    setor: "cardiologia"
}