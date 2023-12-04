## O método reduce()

De forma similar ao **map** e ao **filter**, o **reduce** também recebe uma função por argumento e executa essa função para cada item do array. Entretanto, usaremos o **reduce** quando baseado no array original, precisamos reduzir o array a algum outro tipo de dado, podendo ser esse outro tipo de dado um objeto literal, uma string, um número ou até mesmo um novo array. Com isso o **reduce** tem a capacidade de gerar uma saída que não precisa ser necessariamente um array.

#### Veremos um exemplo a seguir:
~~~

const numbers = [1, 2, 3]

const sumResult = numbers.reduce((accumulator, item) => accumulator + item, 0)

console.log(sumResult) -> 6
~~~

No **reduce** a função sempre precisa retornar um valor e cada vez que esse valor é retornado, o parâmetro accumulator recebe esse valor, pois esse parâmetro existe para acumular o valor a cada execução da função e lembrar desse valor a cada execução.

O argumento 0 no código acima é opcional e ele serve só para ser o valor do accumulator na primeira vêz que função for executada. Se o argumento 0 não fosse especificado, o valor do accumulator seria o primeiro item do array e o parâmetro item receberia o segundo item do array. 

~~~

const phaseScores = [
  { name: 'Vinícius Costa', score: 337 },
  { name: 'Roger Melo', score: 43 },
  { name: 'Alfredo Braga', score: 234 },
  { name: 'Pedro H. Silva', score: 261 },
  { name: 'Ana Paula Rocha', score: 491 },
  { name: 'Vinícius Costa', score: 137 },
  { name: 'Roger Melo' score: 137 },
  { name: 'Alfredo Braga', score: 135 },
  { name: 'Ana Paula Rocha', score: 359 },
  { name: 'Pedro H. Silva', score: 133 }
]

const rogerScore = phaseScores.reduce((accumulator, phaseScore) => {
  if (phaseScore.name === 'Roger Melo') {
      accumulator += phaseScore.score
  }

  return accumulator
}, 0)

console.log(rogerScore) -> 180
~~~

O código acima irá obter a pontuação total do Roger Melo.
