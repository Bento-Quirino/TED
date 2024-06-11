export const pacientes = [
    {
        nome: 'Alan Turing',
        setor: 'Clínico Geral',
    },
    {
        nome: 'Ada Lovelace',
        setor: 'Ortopedista',
    },
    {
        nome: 'Grace Hopper',
        setor: 'Cardiologista',
    },
    {
        nome: 'Linus Torvalds',
        setor: 'Clínico Geral',
    },
    {
        nome: 'Margaret Hamilton',
        setor: 'Clínico Geral',
    },
    {
        nome: 'Tim Berners-Lee',
        setor: 'Cardiologista',
    },
]

// Realiza triagem em um paciente
/**
 * Recebe um paciente e atribui uma prioridade a ele
 * @param {Object} paciente 
 * @returns {Object} paciente
 */
export function triagem(paciente) {
    const prioridades = ['emergência', 'urgente', 'preferencial', 'comum']
    const prioridade = prioridades[Math.floor(Math.random() * prioridades.length)]
    paciente.prioridade = prioridade
    return paciente
}
