**html**
~~~
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Outras maneiras de fazer queries no DOM</title>
</head>
<body>
  <h1 id="title">Outras maneiras de fazer queries no DOM</h1>

  <div>
    <p>Hello world!</p>
    <p>Oi</p>
    <p class="error">Essa é uma mensagem de erro</p>
  </div>

  <div class="error">Essa é outra mensagem de erro</div>

  <script scr="./app.js"></script>
</body>
</html>
~~~

**App.js**
~~~

// obter um elemento através do ID
const title = document.getElementById('title')

console.log(title) -> <h1 id="title">Outras maneiras de fazer queries no Dom</h1>


// obter elementos através do nome da classe
const errors = document.getElementsByClassName('error') 

console.log(errors) -> HTMLCollection(2) [p.error, div.error]


// obter elementos através do nome da tag
const paragraphs = document.getElementsByTagName('p')

console.log(paragraphs) -> HTMLCollections(3) [p, p, p.error]
~~~

Todos os método acima, são formas distintas de fazer *queries* no DOM. A diferença entre os métodos acima e os método *querySelector* e *querySelectorAll* é que além dos querySelector aceitarem seletores css e fazer queries de qualquer elemento que a gente precise, ao invés deles retornarem um *HTMLCollection*, eles retornam um *NodeList* que são menos limitados se comparados ao *HTMLCollection*.

Em *NodeList* podemos usar o método **forEach** por exemplo, para iterar sobre a lista. Já com o *HTMLCollection* primeiro precisamos converte-lo em um array.
