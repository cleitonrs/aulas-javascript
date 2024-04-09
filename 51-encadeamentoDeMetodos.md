## Encadeamento de métodos

~~~
const books = [
  { name: 'Código Limpo', price: 30 },
  { name: 'O milagre da manhã', price: 5 },
  { name: 'Alice no País das Maravilhas', price: 10 },
  { name: 'Quem Pensa Enriquece', price: 50 },
  { name: 'O livro da ciência', price, 40 }
]

const bookOnSale = books
  .filter(({price}) => price > 20)
  .map(({name, price}) => 
    `O preço do livro "${name}" caiu para ${price} reais`)

console.log(booksOnSale) -> [
  O preço do livro "Código Limpo" caiu para 30 reais,
  O preço do livro "Quem Pensa Enriquece" caiu para 50 reais,
  O preço do livro "O livro da ciência" caiu para 40 reais.
]

~~~

Quando usamos o encadeamento de métodos, podemos usar uma convenção para formatar esse encadeamento de métodos, onde cada método fica em uma linha com uma indentação.

A técnica de encadeamento de métodos não é exclusiva de métodos de arrays, ela pode ser aplicada em strings também. A única condição é a de que o método que seja encadeado, funcione no valor que foi retornado pelo método anterior.
