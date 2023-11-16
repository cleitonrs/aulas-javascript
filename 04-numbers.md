##  Numbers
**inteiros e decimais**

~~~
const radius = 10

const pi = 3.14
~~~

##
**Operadores aritméticos**

~~~
const area = pi * radius ** 2

console.log(area) -> 314
~~~

##
**Ordem de operações**

1. parênteses
2. expoentes ou raízes
3. multiplicação e divisão
4. adição e subtração

~~~
const crazyOperation = 5 * (10 - 3) ** 2

console.log(crazyOperation) -> 245
~~~

##
**Operadores de incremento e decremento**

~~~
let postLikes = 10

postLikes = postLikes + 1

console.log(postLikes) -> 11
~~~

##
**Operadores addition, subtraction, multiplication e division assignment**

~~~
postLikes += 2

postLikes -= 3

postLikes *= 4

postLikes /= 5
~~~

##
**NaN - not a number**

~~~
console.log(7 / 'olá') -> NaN
~~~

##
**Concatenação de string com número**

~~~
const likesMessage = 'O post tem ' + postLikes + ' likes.'

console.log(likesMessage) -> O post tem 10 likes.
~~~
