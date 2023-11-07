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

  <div class="content">
    <p>Conteúdo aqui</p>
  </div>

  <script src="./app.js"></script>
</body>
</html>
~~~

## innerText

A propriedade **innerText** irá obter a referência do texto ao qual uma tag foi referenciada 

**app.js**

~~~
const paragraph = document.querySelector('p')

console.log(paragraph.innerText) -> Hello world!

paragraph.innerText += ' Texto inserido'
~~~

Na última linha de código acima, o primeiro parágrafo do documento HTML terá como resultado: Hello world! Texto inserido

~~~
const paragraphs = document.querySelectorAll('p')

paragraphs.forEach((paragraph, index) => {
  paragraph.innerText += ` Novo texto ${index + 1}`
})
~~~

A saída do código acima resultará no arquivo HTML: 

Hello world! Novo texto 1

Oi Novo texto 2

Essa é uma mensagem de erro Novo texto 3

Conteúdo aqui Novo texto 4

## innerHTML

O método **innerHTML** serve para adicionar ou modificar o HTML que o elemento contém 

~~~
const div = document.querySelector('.content')

div.innerHTML += '<h2>Novo h2</h2>'
~~~

No código acima uma nova tag **h2** será adicionada na tag **div** com a classe content ao arquivo HTML

~~~
const people = ['Pedro', 'Paulo', 'Mateus']

people.forEach(person => {
  div.innerHTML += `<p>${person}</p>`
})
~~~

No código acima a **div** com a classe content terá novas tags **p** adicionadas com o conteúdo do array people iterado para cada tag **p**

##

**getters setters**

Tanto a **innerText** quanto a **innerHTML** são getters e setters, ou seja, elas podem obter o valor e também podem estabelecer o valor do elemento

