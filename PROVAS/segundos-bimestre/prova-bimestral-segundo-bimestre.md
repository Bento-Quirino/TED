# Instruções para prova

Utilizando o arquivo `fila.ts`, `types.ts`, `index.ts`, `package.json` e `tsconfig.json` use os métodos necessários (do arquivo fila.ts) para resolver os problemas abaixo.

1. Crie uma fila vazia com tamanho 3. (1 ponto)
2. Crie 3 filas, e adicione as três filas na fila principal. (1 ponto)
3. Remova os pacientes triados da fila de triagem e insira na fila respectiva para sua prioridade. (2 pontos)
    - Emergência: Fila[0]
    - Urgente: Fila[1]
    - Comum: Fila[2]
4. Atenda os pacientes da sua ala e remova ao anteder. (6 pontos)

Exemplo:
```
João, com prioridade de emergência, foi atendido.
Marcia, com prioridade de emergência, foi atendida.
Maria, com prioridade de urgência, foi atendida.
Felipe, com prioridade comum, foi atendido.
José, com prioridade comum, foi atendido.
```


## Avisos

- Todas filas de prioridade devem ter tamanho máximo 5
- Todas as manipulações nas filas devem ser feitas usando os métodos do `fila.ts`

**Caso não siga esses dois tópicos, a prova receberá nota zero**