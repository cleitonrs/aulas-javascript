## Times e comparações

Para criarmos um objeto de data que não representa o momento atual, podemos inserir uma string como argumento da invocação do **Date** para que o objeto que o **Date** crie, se basei na data dessa string.

~~~
const past = new Date('May 1 2023 16:30:00')
const present = new Date()

const timestamp = present.getTime()
console.log(timestamp) -> 1704482732701
~~~

Agora iremos obter a diferença da data atual com a data passada.

~~~
const difference = present.getTime() - past.getTime()
console.log(difference) -> 21513332701
~~~

### Fazendo conversões

~~~
const seconds = Math.round(difference / 1000)
console.log({ seconds }) -> seconds: 21513333

const minutes = Math.round(seconds / 60)
console.log({ minutes }) -> minutes: 358556

const hours = Math.round(minutes / 60)
console.log({ hours }) -> 5976

const days = Math.round(hours / 24)
console.log({ days }) -> 249

console.log(`Escrito há ${days} dias`) -> Escrito há 249 dias
~~~

Agora digamos que recebemos um timestamp e que precisamos convertê-lo em um objeto de data. Como podemos fazer isso? Para isso passaremos o timestamp como argumento do **new Date()**

~~~
const timestamp2 = 1702882780704
console.log(new Date(timestamp2)) -> Mon Dec 18 2023 03:59:40 GMT-0300 (Horário Padrão de Brasília)
~~~
