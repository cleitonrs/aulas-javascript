**HTML**

~~~
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./32-style.css">
  <title>Document</title>
</head>
<body>
  <h1>Obtendo, adicionando, removendo e alterando classes CSS</h1>

  <p class="error">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur odio libero rerum harum nulla nisi tempora ipsam saepe natus autem, nobis ad aliquid sit possimus assumenda quaerat tenetur delectus id!
  </p>

  <script src="./32-app.js"></script>
</body>
</html>
~~~

**CSS**

~~~
.error {
  padding: 10px;
  color: crimson;
  border: 1px dotted crimson;
}

.success {
  padding: 10px;
  color: green;
  border: 1px dotted green;
}
~~~

## classList

Com o método **classList** podemos obter a listagem das classes que um elemento possui.

**app.js**
~~~
const paragraph = document.querySelector('p')

console.log(paragraph.classList)
~~~

## Adicionando classe

Para adicionar uma classe, podemos usar o método **add** da **classList**

~~~
paragraph.classList.add('error')
~~~

## Removendo classe

Para remover uma classe, podemos usar o método **remove** da **classList**

~~~
paragraph.classList.remove('error')
~~~

## textContent

O método **textContent** assim como o método **innerText**, irá exibir o texto do conteúdo da tag. Mas diferente do método **innerText** que só exibe o conteúdo visível na tag HTML, ele exibirá o conteúdo mesmo que o mesmo esteja oculto com uma propriedade **display: none**

## O método toggle

Quando o elemento não tem uma classe e passamos o método **toggle**, ele irá criar a classe passada por argumento. Caso o elemento já possua a classe passada como argumento no método **toggle**, a classe será removida desse elemento.

~~~
const title = document.querySelector('h1')

// Adiciona a classe test
title.classList.toggle('test')

// Remove a classe test
title.classList.toggle('test')


