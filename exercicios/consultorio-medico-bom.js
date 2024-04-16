// EXERCÍCIOS AVANÇADOS

// 2. Imagine que você está em um consultório médico
// e precisa controlar o fluxo de pacientes que chegam e para onde eles vão.

// Quando um paciente chega, ele escolhe que médico deseja consultar.
// - Clínico Geral
// - Ortopedista
// - Cardiologista

// Selecionado o setor do médico, o paciente é encaminhado para a fila de triagem
// Onde TODOS os pacientes aguardam a sua vez para receberem um diagnóstico preliminar podendo ser:
// - comum
// - preferencial
// - urgente
// - emergência
// Sendo que a ordem de atendimento é:
// - emergência
// - urgente
// - preferencial
// - comum

// Então se temos uma fila de triagem com pacientes com:
// [preferencial, comum, comum]
// E chega um paciente com "comum", ele vai para trás da fila em ordem de prioridade
// [preferencial, urgente, comum, comum]

// Chegando a vez do paciente, ele é encaminhado para a sala de consulta
// Onde espera o médico chamar

// O médico então faz a consulta e dá o diagnóstico final



// Crie um sistema que simule esse fluxo de pacientes