## O método sort()

O método **sort** serve para ordenar os itens de um array. Podendo ordenar um array de strings em ordem alfabética, ordenar um array de números em ordem crescente ou decrescente. O **sort** gera mutabilidade, ou seja, ele modifica o array original.

~~~
// exemplo 1: ordenando strings

const names = ['Christian', 'Alfredo', 'Edson']

names.sort()

console.log(names) -> ['Alfredo', 'Christian', 'Edson']
~~~

##

 Quando usamos dois parâmetros no método **sort**, se o argumento2 é maior que o argumento1, a função retornará um número positivo e o argumento2 virá antes do argumento1. Caso o argumento1 seja maior que o argumento2, a função retornará um número negativo e o argumento1 virá antes do argumento2. E se os dois argumentos tiverem o mesmo valor, os itens não serão reordenados.

~~~
// exemplo 2: ordenando números

const scores = [10, 50, 20, 5, 35, 70, 45]

scores.sort((score1, score2) => score2 - score1)

console.log(scores) -> [70, 50, 45, 35, 20, 10, 5]

~~~

No código acima os itens do array são ordenados de forma decrescente.

##

~~~
// exemplo 3: ordenando objetos

const theBigFamily = [
  { name: 'Lineu', score: 20 },
  { name: 'Nenê', score: 10 },
  { name: 'Tuco', score: 50 },
  { name: 'Bebel', score: 30 },
  { name: 'Agostinho', score: 70 }
]

theBigFamily.sort((item1, item2) => item2.score - item1.score)

console.log(theBigFamily) -> [
  { name: 'Agostinho', score: 70 }
  { name: 'Tuco', score: 50 },
  { name: 'Bebel', score: 30 },
  { name: 'Lineu', score: 20 },
  { name: 'Nenê', score: 10 },
]
~~~

No código acima os item do array serão ordenados em ordem decrescente.
