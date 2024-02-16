// Simulado para a prova de TED

// Crie uma PILHA de livros com as seguintes propriedades:
// - nome
// - autor
// - quantidade de páginas
// - genero

// Dada uma lista de livros, crie uma função que arrume os livros na pilha 
// de acordo com a quantidade de páginas, do menor para o maior.

// Após arrumar a pilha, separe os livros por pilhas de gênero.

// Após arrumar a pilha, crie uma função que REMOVA o livro do topo da pilha
// e RETORNE o livro removido.

// Crie uma função que adicione um livro no topo da pilha.
// Crie uma função que retorne o conteúdo da pilha.

//Exemplo de pilha de livros:
let conteudoPilha = [
        {
            titulo: "O Senhor dos Anéis",
            autor: "J. R. R. Tolkien",
            paginas: 1000,
            editora: "HarperCollins",
            genero: "Fantasia"
        },
        {
            titulo: "O Hobbit",
            autor: "J. R. R. Tolkien",
            paginas: 3000,
            editora: "HarperCollins",
            genero: "Fantasia"
        },
        {
            titulo: "A Metamorfose",
            autor: "Franz Kafka",
            paginas: 200,
            editora: "HarperCollins",
            genero: "Drama"
        },
        undefined
]

console.log(conteudoPilha)

// Pontuação
// - Criação do projeto em módulos (1 ponto)
// - Criação da função adicionarLivro (0.4 ponto)
// - Criação da função removerLivro (0.3 ponto)
// - Criação da função listarPilha (0.3 ponto)
// - Criação da função arrumarPilha (0.5 ponto)
// - Criação da função separarPilha por gênero (0.5 ponto)