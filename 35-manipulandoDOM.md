**HTML**
~~~
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>Document</title>
</head>
<body>
  <h1>Todos</h1>

  <ul>
    <li>Comprar frangos</li>
    <li>Ler livro</li>
    <li>Tocar violão</li>
    <li>Pagar as contas</li>
  </ul>

  <button>Adicionar item</button>

  <script src="./app.js"></script>
</body>
</html>
~~~

**CSS**
~~~
ul {
  padding: 0;
}

li {
  list-style-type: none;
  max-width: 200px
  padding: 8px;
  margin: 8px 0;
  background: #eee;
  border: 1px dotted #ddd;
}
~~~

## Removendo e adicionando elementos no DOM

Uma das formas de remover um elemento do DOM é usando o método **remove**.

**App.js**
~~~
const ul = document.querySelector('ul')

ul.remove()
~~~

No código acima a **ul** será removida do documento HTML.

~~~
//const ul = document.querySelector('ul')

//ul.remove()

const lis = document.querySelectorAll('li')

lis.forEach(li => {
  li.addEventListener('click', event => {
    const clickedElement = event.target

    clickedElement.remove()
  })
})
~~~

Com o código acima, se a gente clicar em uma **li**, ela será removida de dentro da **ul** e consequentemente da página.

**Adicionando item**

~~~
const button = document.querySelector('button')

button.addEventListener('click', () => {
  ul.innerHTML += '<li>Novo item</li>'
})
~~~

Essa é uma forma de adicionar elemento.
No código acima levaremos em consideração que a const ul foi descomentada no código anterior.

Uma outra forma é a seguinte:

**createElement**

O createElement é método do document que a gente pode usar para criar um novo elemento HTML e a gente pode passar como argumento desse método o nome da tag que a gente quer criar.

~~~

button.addEventListener('click', () => {
  const li = document.createElement('li')

  li.textContent = 'Novo item'

  console.log(li)
})
~~~

No código acima o console.log exibirá -> 
~~~
<li>Novo item</li>
~~~

Agora veremos como inserir essa tag no DOM dentro da **ul**. Existem alguma formas distintas da gente fazer isso, e uma das formas é a gente usar o método **append** no pai que esse elemento vai ter. E uma outra forma é a gente usar o método **prepend** no pai que esse elemento vai ter.

~~~
button.addEventListener('click', () => {
  const li = document.createElement('li')

  li.textContent = 'Novo item'
  ul.append(li)
})
~~~

No código acima veremos que nossa **li** foi inserida como último filho da nossa **ul**

O método **append** insere o elemento que ele recebeu como argumento, como último filho do elemento no qual ele foi encadeado, nesse caso o **ul**

Agora quando a adição no DOM for feita e a gente quer que o elemento inserido seja como primeiro filho, usamos o método **prepend**.

~~~
button.addEventListener('click', () => {
  const li = document.createElement('li')

  li.textContent = 'Novo item'
  ul.prepend(li)
})
~~~

Agora o código acima a **li** foi inserida como primeiro filho da **ul**.

