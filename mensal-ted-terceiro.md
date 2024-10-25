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

# Dicas

## Como Consultar uma Struct em C

Para acessar os campos de uma `struct` em C, usamos:
- **Operador de ponto (`.`)** se estamos acessando a `struct` diretamente.
- **Operador de seta (`->`)** se estamos acessando a `struct` através de um ponteiro.

### Exemplo 1: Consulta com o Operador de Ponto

Se a variável da `struct` está diretamente acessível, usamos o operador de ponto (`.`).

```c
#include <stdio.h>

typedef struct {
    char nome[50];
    int idade;
} Pessoa;

int main() {
    Pessoa p;
    p.idade = 30; // Acessando diretamente o campo 'idade'
    printf("Idade: %d\n", p.idade);
    return 0;
}
```

### Exemplo 2: Consulta com o Operador de Seta (Ponteiro)

Se estamos acessando a struct através de um ponteiro, usamos o operador de seta (->).

```c
#include <stdio.h>
#include <stdlib.h>

typedef struct {
    char nome[50];
    int idade;
} Pessoa;

int main() {
    Pessoa *p = (Pessoa *)malloc(sizeof(Pessoa));
    p->idade = 30; // Acessando o campo 'idade' usando ponteiro
    printf("Idade: %d\n", p->idade);
    free(p);
    return 0;
}
```

### Resumo
- Ponto (.): usado para acessar campos da struct diretamente.
- Seta (->): usado para acessar campos da struct via ponteiro.


## Parâmetros por Referência em C

Em C, quando passamos um parâmetro para uma função por referência, permitimos que a função modifique diretamente o valor original da variável. Para isso, usamos ponteiros para enviar o endereço de memória da variável.

### Exemplo de Parâmetro por Referência

Aqui, vamos usar um ponteiro para que a função `incrementar` modifique diretamente o valor de uma variável `numero`.

```c
#include <stdio.h>

void incrementar(int *valor) {
    (*valor)++; // Incrementa o valor no endereço apontado por 'valor'
}

int main() {
    int numero = 5;
    incrementar(&numero); // Passa o endereço de 'numero' para a função
    printf("Número após incremento: %d\n", numero);
    return 0;
}
```

Explicação
- *valor: Acessa o valor armazenado no endereço de valor, permitindo a modificação direta.
- &numero: Passa o endereço de numero para a função incrementar, permitindo a alteração do valor original.
