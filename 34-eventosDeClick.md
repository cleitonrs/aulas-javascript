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

Para começar, vamos interagir com o **click** do botão. Existem três passos para gente fazer isso. O primeiro passo é fazer uma query no DOM para obter a referência do elemento para o qual a gente quer que o evento aconteça. O segundo passo é a gente adicionar nesse elemento um **eventListener**(escutador de evento). E o terceiro passo é a gente implementar uma função de callback que vai ser executada quando esse evento acontecer.

**App.js**
~~~
const button = document.querySelector('button')

button.addEventListener('click', () => {
  console.log('Clicou no botão')
})
~~~

Ao clicar no botão da página, a mensagem "Clicou no botão" será exibida no console do browser.

~~~
const lis = document.querySelectorAll('li')

lis.forEach(li => {
  li.addEventListener('click', () => {
    console.log('Clicou na li')
  })
})
~~~

No browser quando um evento acontece, dentro da função de callback, ele disponibiliza automaticamente um objeto no parâmetro dessa função. A gente vai chamar esse objeto recebido no parâmetro de **event**. Esse objeto contém informações sobre o evento que aconteceu. Se dentro do console.log a gente passar o **event** e clicar na **li**, veremos na saído do console um objeto *MouseEvent* com várias propriedades disponíveis.

Para descobrir em qual elemento o evento aconteceu, usamos a propriedade **target**, ou seja a **target** armazena a referência do elemento em o evento ocorreu.

~~~
lis.forEach(li => {
  li.addEventListener('click', event => {
    const clickedElement = event.target

    clickedElement.style.textDecoration = 'line-through'
  })
})
~~~

Com o código acima, ao clicarmos nas li do documento HTML, veremos que um traço será inserido na li que a gente clicar.

