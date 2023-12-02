## O método map()

O **map** é um método de array usado para gerar um novo array, com a mesma quantidade de items do array original, só que, com cada item transformado.

~~~
const numbers = [1, 2, 3]

const doubleNumbers = number.map(item => item * 2)

console.log(doubleNumbers) -> [2, 4, 6]
~~~

O código acima retorna um novo array com cada elemento, valendo o dobro do valor do elemento do array original.

<em>Para o **map** retornar um novo array a função no parâmetro do map **sempre deve retornar um valor**. E essa é uma das principais diferenças entre o **map** e o **forEach**, já que o **forEach** não retorna um valor.</em>

~~~
const prices = [20, 10, 30, 25, 15, 40, 80, 5]

const salePrices = prices.map(price => price / 2)

console.log(salePrices) -> [10, 5, 15, 12.5, 7.5 20, 40, 2.5]
~~~

O código acima retorna um novo array com os preços do array original pela metade.

~~~
const products = [
  { name: 'Mouse Sem Fio', price: 30 },
  { name: 'Pen Drive', price: 25 },
  { name: 'Cartucho de Tinta', price: 50 },
  { name: 'Suporte Ergonômico para Notebook', price: 23 },
  { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
]

 const saleProducts = products.map(product => {
  if (product.price >= 30) {
    return { name: product.name, price: product.price / 2}
  }

  return product
 })

 console.log(saleProducts) -> [
  { name: 'Mouse Sem Fio', price: 15 },
  { name: 'Pen Drive', price: 25 },
  { name: 'Cartucho de Tinta', price: 25 },
  { name: 'Suporte Ergonômico para Notebook', price: 23 },
  { name: 'Repetidor de Sinal Wi-Fi', price: 22 }
]
~~~

O código acima retorna um novo array de produtos onde os produtos com preço maior ou igual a 30, passam a ter metade do valor.

## Vale lembrar que

~~~
const saleProducts = products.map(product => {
  if (product.price >= 30) {
    product.price = product.price / 2
    return product
  }

  return product
})
~~~

O código acima da forma que foi escrito, irá alterar o array original.
