## Métodos

Métodos são funções que estão associadas a objetos ou tipo de dados como strings. Os métodos são criados num objeto ou no tipo de dado em si. Os métodos sempre são chamados através da notação de **.** seguido do nome do método

Já as funções são criadas sozinhas.

~~~
const name = 'Cleiton'

//funções
const sayHi = () => 'Oi'

const greet = sayHi()
console.log(greet) -> Oi

//métodos
const nameInUpperCase = name.toUpperCase()
console.log(nameInUpperCase) -> CLEITON
~~~
