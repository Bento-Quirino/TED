const pacientes = [
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
        nome: 'Brasil',
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
function triagem(paciente) {
    const prioridades = ['emergência', 'urgente', 'preferencial', 'comum']
    const prioridade = prioridades[Math.floor(Math.random() * prioridades.length)]
    
    paciente.prioridade = prioridade
    return paciente
}

const consultorio = {
    triagem: pacientes,
    alas: {
        uti: [
            {
                "Nome": "FIAT UNO",
                "modelo": 2009,
            }
        ],
        clinicoGeral: [

        ],
        ortopedista: [

        ]
    }
}

console.log(consultorio.triagem)
// REALIZAR triagem em todos pacientes
for (let i = 0; i < consultorio.triagem.length; i++) {
    consultorio.triagem[i] = triagem(consultorio.triagem[i])
    // Retira da fila

    // Coloca na ala que ele escolheu
    
}
console.log("-------------")
console.log("TRIAGEM FEITA EM TODOS")
console.log("-------------")
console.log(consultorio.triagem)
