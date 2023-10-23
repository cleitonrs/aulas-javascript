## Operador lógico not (!)

Quando o operador **!** é inserido antes de uma expressão que resulte em **true**, ele troca o valor para **false**, se a expressão resulta em **false**, ele troca para **true**.

~~~
let isUserLoggedIn = false

if (!isUserLoggedIn) {
  console.log('Você precisa fazer login para continuar!)
}
~~~

O console.log acima será executado, pois a condição se tornou **true**

console.log(!true) -> false

console.log(!false) -> true