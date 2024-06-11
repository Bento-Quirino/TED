# Instruções para prova

Utilizando o arquivo `fila.ts`, `types.ts`, `index.ts`, `package.json` e `tsconfig.json` use os métodos necessários (do arquivo fila.ts) para resolver os problemas abaixo.

1. Crie uma fila vazia.
2. Crie 3 filas, e adicione as três filas na fila principal.
3. Adicione os pacientes triados na fila respectiva para sua prioridade.
    - Emergência: Fila[0]
    - Urgente: Fila[1]
    - Comum: Fila[2]
4. Atenda os pacientes da sua ala e remova ao anteder.

Exemplo:
```
João, com prioridade de emergência, foi atendido.
Marcia, com prioridade de emergência, foi atendida.
Maria, com prioridade de urgência, foi atendida.
Felipe, com prioridade comum, foi atendido.
José, com prioridade comum, foi atendido.
```