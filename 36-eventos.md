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

  <button>Clique aqui</button>

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

**App.js**
~~~
const ul = document.querySelector('ul')
const button = document.querySelector('button')

button.addEventListener('click', () => {
  const li = document.createElement('li)

  li.textContent = 'Novo item'
  ul.prepend(li)
})

const lis = document.querySelectorAll('li')

lis.forEach(li => {
  li.addEventListener('click', event =. {
    const clickedElement = event.target

    clickedElement.remove()
  })
})
~~~

## Event bubbling

**Event bubbling** é a propagação de eventos. O evento é iniciado no target do evento, que é o evento no qual o elemento foi adicionado, e esse evento se propaga em direção aos pais desse target, para que os callbacks de eventos que esses pais têm, sejam disparados também.

Por exemplo: imagem que além do evento de click que temos atrelado a **li**, também temos um evento de click atrelado a **ul**. Quando a gente clicar na **li**, se ela tiver um evento atrelado a ela, o callback desse evento vai ser disparado e o evento vai ser propagado para o pai da **li** que é a **ul**, e se a **ul** tem um evento atrelado a ela, o callback desse evento também será disparado.

~~~
const ul = document.querySelector('ul')
const button = document.querySelector('button')

button.addEventListener('click', () => {
  const li = document.createElement('li)

  li.textContent = 'Novo item'
  ul.prepend(li)
})

const lis = document.querySelectorAll('li')

lis.forEach(li => {
  li.addEventListener('click', event =. {
    const clickedElement = event.target
    console.log('Clicou na LI')
    clickedElement.remove()
  })
})

ul.addEventListener('click', () => {
  console.log('clicou na UL')
})
~~~

No código acima a LI clicada será removida do DOM e aparecerá no console.log() -> 'Clicou na LI' 'Clicou na UL'

Isso aconteceu devido ao **event bubbling**(propagação de evento).

Caso a gente queira evitar essa propagação, a gente pode usar o método **stopPropagation** do objeto *event*, como no código abaixo.

~~~
const ul = document.querySelector('ul')
const button = document.querySelector('button')

button.addEventListener('click', () => {
  const li = document.createElement('li)

  li.textContent = 'Novo item'
  ul.prepend(li)
})

const lis = document.querySelectorAll('li')

lis.forEach(li => {
  li.addEventListener('click', event =. {
    const clickedElement = event.target
    console.log('Clicou na LI')

    event.stopPropagation()
    clickedElement.remove()
  })
})

ul.addEventListener('click', () => {
  console.log('clicou na UL')
})
~~~

## Event delegation

O **event delegation** é outro conceito relacionado ao **event bubbling**. Ele pode ser muito útil quando a gente atrela eventos em múltiplos elementos.

~~~
const ul = document.querySelector('ul')
const button = document.querySelector('button')

button.addEventListener('click', () => {
  const li = document.createElement('li)

  li.textContent = 'Novo item'
  ul.prepend(li)
})

ul.addEventListener('click', event => {
  const clickedElement = event.target

  if (clickedElement.tagName === 'LI') {
    clickedElement.remove()
  }
})
~~~

No código acima a **li** somente será removida se clicarmos exatamente nela.

A propriedade *tagName* retorna uma string em caixa alta contendo o nome da tag em qual o evento foi disparado.

