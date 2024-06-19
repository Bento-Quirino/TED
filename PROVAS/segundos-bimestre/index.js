"use strict";
exports.__esModule = true;
var fila = require("./fila");
var pacientesTriados = [
    { nome: "Maria", prioridade: "urgente" },
    { nome: "José", prioridade: "comum" },
    { nome: "Ana", prioridade: "emergência" },
    { nome: "Pedro", prioridade: "urgente" },
    { nome: "Clara", prioridade: "comum" },
    { nome: "Bryan", prioridade: "emergência" },
    { nome: "Mariana", prioridade: "urgente" },
    { nome: "Peter", prioridade: "comum" },
    { nome: "Chris", prioridade: "comum" },
];
function main() {
    console.log("Alocando pacientes a suas respectivas pioridades...");
    console.log("---------------------------------------------");
    // Criando uma ala qualquer
    var alaX = fila.create(3);
    // Criando prioridades na fila
    for (var i = 0; i < 3; i++) {
        fila.enqueue(alaX, fila.create(5));
    }
    // Adicionando pacientes a fila com base na prioridade
    pacientesTriados.forEach(function (paciente) {
        switch (paciente.prioridade) {
            case "emergência":
                fila.enqueue(alaX[0], paciente);
                break;
            case "urgente":
                fila.enqueue(alaX[1], paciente);
                break;
            case "comum":
                fila.enqueue(alaX[2], paciente);
                break;
        }
    });
    // Exibindo fila
    console.log("Fila de pacientes por prioridade:");
    console.log("---------------------------------------------");
    console.log("Emergência:");
    console.log(alaX[0]);
    console.log("Urgente:");
    console.log(alaX[1]);
    console.log("Comum:");
    console.log(alaX[2]);
}
main();
