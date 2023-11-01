## Query Selector

**html**
~~~
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Query selector & query selector all</title>
</head>
<body>
  <h1>Query selector & query selector all</h1>

  <div>
    <p>Hello world!</p>
    <p>Oi</p>
    <p class="error">Essa é uma mensagem de erro</p>
  </div>

  <div class="error">Essa é outra mensagem de erro</p>

</body>
</html>
~~~

**app.js**

~~~
const paragraph = document.querySelector('p')

console.log(paragraph) -> a saída será a primeira referência para a tag p -> <p>Hello world!</p>

const errorDiv = document.querySelector('div.error')

console.log(errorDiv) -> a saída sera a referência da div com a classe error -> <div class="error">Outra mensagem de erro</div>

const paragraphs = document.querySelectorAll('p')

console.log(paragraphs) -> NodeList(3) [p, p, p.error]
~~~

**NodeList** é uma lista de nós, similar a um array, mas ele não é um array, significando que não podemos usar todos os métodos de arrays em um NodeList. Da mesma forma que a gente faz com arrays, podemos usar a notação de **[]** para obter um item de uma posição específica desse NodeList.

~~~

console.log(paragraphs[0]) -> a saída será a referência do primeiro parágrafo da nossa página -> <p>Hello world!</p>
~~~

E da mesma for que um array, um NodeList pode ser percorrido por um **forEach()**

~~~
paragraphs.forEach(paragraph => {
  console.log(paragraph)
})

//a saída será:

<p>Hello world!</p>
<p>Oi</p>
<p class="error">Essa é uma mensagem de erro</p>
~~~
