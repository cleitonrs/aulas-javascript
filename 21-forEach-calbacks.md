## forEach e callbacks

Função de **callback** é uma função que é passada como argumento no parâmetro de outra função.

~~~
const myFunc = callback => {
  const value = 77

  callback(value)
} 

myFunc(number => {
  console.log(number)
})
~~~
Saída do console.log() -> 77

##

O **forEach** é um método que irá iterar sobre um array.

O método **forEach** pode receber 3 parâmetros, sendo eles o item, o index e o array.

~~~
const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook']

socialNetworks.forEach((item) => {
  console.log(item)
})
~~~

A saída do console.log será -> youtube twitter instagram facebook

Uma outra vantagem do **forEach** em relação ao **for** é que a declaração da função, pode ser desacoplada

~~~
const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook']

const logArray = (item) => {
  console.log(item)
}

socialNetworks.forEach(logArray)
~~~ 

A saída do console.log continua a mesma: ->  youtube twitter instagram facebook
