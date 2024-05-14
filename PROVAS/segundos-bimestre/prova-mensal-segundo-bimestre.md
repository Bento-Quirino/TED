## Prova mensal de Estrutura de Dados - Segundo Bimestre

O foco dessa prova é testar os conhecimentos adquiridos durante o segundo bimestre da disciplina de Estrutura de Dados (pensamento lógico e estruturas de dados complexas). A prova é composta por um projeto, e o aluno deve responder todas elas, sendo o conteúdo:

- Filas
- Filas de filas
- Raciociínio lógico
- Typescript
- Setup de pojeto typescript

### Projeto

Imagine que você está em uma sala de aula, e foi dado o sinal para a saída.
Mas os alunos devem sair por ordem de fileira, e cada fileira deve sair por ordem de cadeira.

Crie um programa que simule a saída dos alunos, onde você deve criar uma fila de filas, onde cada fila representa uma fileira, e cada elemento da fila representa uma cadeira.

O programa deve exibir no terminal algo parecido com:

```
Fileira 1
João se levantou da cadeira 1
Tchau joão!
-------------------------------
Felipe se levantou da cadeira 2
Tchau Felipe!
-------------------------------
Maria se levantou da cadeira 3
Tchau Maria!
-------------------------------
-------------------------------
Fileira 2
José se levantou da cadeira 1
Tchau José!
-------------------------------
-------------------------------
Fileira 3
Ana se levantou da cadeira 1
Tchau Ana!
-------------------------------
-------------------------------
```

Use os alunos abaixo para preencher as filas:

```javascript
const alunos = [
  "João",
  "Felipe",
  "Maria",
  "José",
  "Ana",
  "Carlos",
  "Pedro",
  "Paulo",
  "Lucas",
  "Mariana",
  "Juliana",
  "Fernanda",
  "Rafael",
  "Ricardo",
  "Jorge",
  "Miguel",
];
```

### AVISO:

- O programa deve ser feito em TYPESCRIPT
- O programa deve ser feito usando o conceito de FILAS e o arquivo auxiliar `fila.ts` deve ser usado
- O programa deve ser feito em um arquivo chamado `index.ts`
- Devem ser usados types para os alunos e para as funções, e o arquivo `types.ts` deve ser usado
