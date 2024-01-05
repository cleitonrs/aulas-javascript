## Data e hora em Javascript

Em javascript datas são um tipo de objeto, ou seja, por serem objetos, ele são um tipo de referência e não um tipo primitivo.

Iremos utilizar um **date constructor** para construir o objeto date.

~~~

const present = new Date()

console.log(present) -> Thu Jan 04 2024 11:10:18 GMT-0300 (Horário Padrão de Brasília)

~~~

Caso a gente queira obter somente algumas partes da data acima, podemos usar vários métodos que o objeto Date contém para obtermos, o ano, mês, dia e as horas.

~~~

console.log('getFullYear:', present.getFullYear()) -> getFullYear: 2024

console.log('getMonth:', presente.getMonth()) -> getMonth: 0

~~~

O console.log do getMonth teve como resultado o 0 e não 1 pelo motivo da contagem do mês ser *zero based* ou seja, a contagem começa com 0.

~~~

console.log('getDay:', present.getDay()) -> getDay: 4
console.log('getHours:', present.getHours()) -> getHours: 11
console.log('getMinutes:', present.getMinutes()) -> getMinutes: 10
console.log('getSecond:', present.getSecond()) -> getSeconds: 18

~~~

### Timestamp

O timestamp é representado pelo número de milissegundos de 1 de Janeiro de 1970 até o momento presente

~~~
console.log('timestamp:', present.getTime()) -> 1704377418695
~~~

~~~
console.log('toDateString():', present.toDateString()) -> Thu Jan 04 2024
console.log('toTimeString:', present.toTimeString()) -> 11:10:18 GMT-0300 (Horário Padrão de Brasília)
console.log('toLocaleString:', present.toLocaleString()) -> 04/01/2024, 11:10:18
~~~
 