## O método filter()

De forma similar ao **map** o **filter** também recebe uma função como argumento e executa essa função para cada item do array.

O **filter** é usado para obter um novo array com *só alguns* items do array original. Para isso ele cria um array verificando quais items do array original atendem a condição especificada dentro da função que é passada como argumento. Ou seja a função será executada para cada item do array retornando um **boolean**, onde tendo valor **true** o item será adicionado ao array.

~~~
const randomNumbers = [36, 99, 37, 63]

const randomNumberGreaterThan37 = randomNumber.filter(item => item > 37)

console.log(randomNumberGreaterThan37) -> [99, 63]
~~~

No código acima, um novo array com os números maiores que 37 do array original é retornado.

~~~
const users = [
  { name: 'Ada Lovelace', premium: true },
  { name: 'Grace Hoper', premium: false },
  { name: 'Alan Turing', premium: true },
  { name: 'Linus Torvalds', premium: false },
  { name: 'Margaret Hamilton', premium: true}
]

const premiumUsers = users.filter(user => user.premium)

console.log(premiumUsers) -> [
  { name: 'Ada Lovelace', premium: true },
  { name: 'Alan Turing', premium: true },
  { name: 'Margaret Hamilton', premium: true}
]
~~~

No código acima, somente os usuários que contém premium são exibidos no novo array.
