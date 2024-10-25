# Exercício: Implementação de uma Fila Dinâmica em C

## Descrição

Este exercício consiste em criar uma estrutura de fila usando alocação de memória dinâmica em C. A fila deve permitir que você insira e remova elementos, e, quando estiver cheia, deve dobrar de tamanho automaticamente. A implementação deve usar ponteiros genéricos (`void*`), permitindo que a fila armazene qualquer tipo de dado.

## Pré-requisitos

- Conhecimento de alocação de memória com `malloc` e `free`.
- Noções básicas de manipulação de ponteiros e estruturas em C.

## Estrutura Inicial

O código abaixo oferece as funções para criar e limpar a fila.

```c
#include <stdio.h>
#include <stdlib.h>

typedef struct {
    void **dados;      // Ponteiro genérico para os elementos da fila
    int inicio;        // Índice do primeiro elemento
    int fim;           // Índice do último elemento
    int tamanho;       // Capacidade atual da fila
    int capacidade;    // Capacidade total da fila
} Fila;

// Função para criar a fila
Fila* criarFila(int capacidadeInicial) {
    Fila *fila = (Fila *) malloc(sizeof(Fila));
    if (fila == NULL) return NULL;  // Verifica se a alocação foi bem-sucedida

    fila->dados = (void **) malloc(sizeof(void*) * capacidadeInicial);
    fila->inicio = 0;
    fila->fim = -1;
    fila->tamanho = 0;
    fila->capacidade = capacidadeInicial;

    return fila;
}

// Função para limpar e liberar a fila
void limparFila(Fila *fila) {
    if (fila != NULL) {
        free(fila->dados);  // Libera a memória alocada para os dados
        free(fila);         // Libera a memória da estrutura da fila
    }
}
```

## Instruções

### Implementar o Método de Inserção
- Crie uma função `inserirNaFila` que adiciona um novo elemento ao final da fila.
- Se a fila estiver cheia, a função deve chamar `dobrarCapacidade` para expandir a fila automaticamente.

### Implementar o Método de Remoção
- Crie uma função `removerDaFila` que remove o elemento na frente da fila e retorna um ponteiro `void*` para o item removido.
- Caso a fila esteja vazia, a função deve retornar `NULL`.

### Implementar o Método de Redimensionamento
- Crie uma função `dobrarCapacidade` que dobra a capacidade da fila, realocando a memória e ajustando os índices de `inicio` e `fim`.

## Exemplo de Uso
Após implementar as funções solicitadas, o código principal deve:

1. Criar uma fila com uma capacidade inicial.
2. Inserir e remover elementos conforme necessário.
3. Dobrar a capacidade automaticamente quando a fila atinge a capacidade máxima.
