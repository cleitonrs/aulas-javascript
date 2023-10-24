## Funções

Funções são uns dos principais conceitos fundamentais em qualquer linguagem de programação. Elas fazem parte do tipo **object** e o papel principal delas, é permitir que a gente crie um bloco de código que a gente pode invocar e executar quando quiser.

Funções também podem ter valores passados pra dentro delas, onde ela irá trabalhar esses valores e retornar uma saída pra eles.

## Declaração de função

~~~
function sayHi () {
  console.log('oi)
}
~~~
Executando a função:

sayHi()

Saída no console -> oi

## Função em expressão

~~~
const showFood = function () {
  console.log('pizza')
}
~~~ 

Executando a função:

showFood()

Saída no console -> pizza

## Argumentos, parâmetros e default parameters

~~~
const myFunc = function (name) {
  console.log(`Oi, ${name}`)
}

myFunc('Cleiton')
~~~

Saída no console -> Oi, Cleiton

A variável **name** na função acima, se chama **parâmetro**, e o nome Cleiton na execução da função acima se chama **argumento**. Uma função pode ter múltiplos parâmetros e argumentos.

~~~
const myFunc = function (name, lastName) {
  console.log(`Oi, ${name} ${lastName}`)
}

myFunc('Cleiton', 'Santos')
~~~

Saída no console -> Oi, Cleiton Santos

## Retornando valores

O **return** serve para retornar o valor o valor da função, sendo assim o seu valor não ficará preso no escopo da função.
~~~
const double = function (number) {
  return number * 2
}

const result = double(3)

const showResult = function (value) {
  return `O resultado é: ${value}`
}

console.log(showResult(result)) -> O resultado é: 6
~~~
 