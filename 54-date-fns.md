## Date-fns

A date-fns é uma biblioteca para se trabalhar com datas no javascript, tanto no browser quanto no node.js.

### HTML
~~~
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>Conhecendo a date-fns</title>
</head>
<body>
  <div class="clock-container">

  </div>

  <script src="http://cdn.date-fns.org/v1.9.0/date_fns.min.js"></script>
  <script src="./app.js"></script>
</body>
</html>
~~~

A versão 1.9.0 da date-fns ainda permite o uso via *cdn* 

### app.js

~~~
const present = new Date()
console.log(dateFns.isToday(present)) -> true
~~~

No código acima verificamos se a data corresponde a data atual.
Quando a date-fns é usada em um projeto através da *cdn* geralmente essa é a assinatura de uso dela, invocamos o método do date-fns e inserimos as datas como argumento dessa invocação.

#
Agora veremos como a date-fns pode ser usada para formatar datas.

~~~
const present = new Date()

console.log(dateFns.format(present, 'MMMM')) -> January
console.log(dateFns.format(present, 'YY')) -> 24
console.log(dateFns.format(present, 'dddd')) -> Thursday
console.log(dateFns.format(present, 'Do')) -> 18th
console.log(dateFns.format(present, 'DD/MM/YYYY')) -> 18/01/2024
~~~

No código acima, o primeiro argumento é a data que será formatada, o segundo argumento é uma string com os tokens que vão definir como será a formatação. Também é possível passar um terceiro argumento que será um objeto que contém as opções de idioma da data. 

#

~~~
const past = new Date('January 10 2024 15:30:00')

console.log(dateFns.distanceInWords(present, past, { addSuffix: true}))
~~~

O código acima está comparando as duas datas. O método **distanceInWords** irá retornar uma string que representa a distância entre as datas que ele receber como argumento. Para incluir um sufixo na formatação da data, podemos inserir um objeto que contem opções sobre a formatação da data, como terceiro argumento do **distanceInWords** 

Documentação do date-fns: https://date-fns.org
