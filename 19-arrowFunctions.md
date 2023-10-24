## Arrow function

**Arrow functions** são uma forma mais curta e concisa de implementar funções.

~~~
const double = (number) => {
  return number * 2
}
~~~

Quando a **arrow function** possui somente um parâmetro, podemos remover os **()**, mas caso o parâmetro possua um valor **default** os **()** serão obrigatórios, o mesmo se aplica caso as **arrow functions** não possuam parâmetros.

Quando o bloco de código da **arrow function** contém somente uma linha retornando um valor, podemos remover a palavra chave **return** e eliminar as **{}** e deixar a **arrow function** só com uma linha. Dessa forma o valor será retornado implicitamente, sem a necessidade de especificar a palavra chave **return**.

O valor que está sendo retornado pode ser qualquer **expressão javascript**, ou seja, qualquer pedaço de código que resulta em um valor: um array, uma string, um boolean, um número.

~~~
const double = number => number * 2
