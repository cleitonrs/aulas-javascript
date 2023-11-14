**HTML**
~~~

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>O evento submit</title>
</head>
<body>
  <h1>O evento submit</h1>

  <form class="signup-form">
    <input type="text" id="username" placeholder="username" autofocus>
    <button>Enviar</button>
  </form>

  <script src="./app.js"></script>
</body>
</html>
~~~

**CSS**
~~~

body {
  background: #eee;
}

h1 {
  text-align: center;
}

form {
  max-width: 200px;
  margin: 40px auto;
  background: white;
  padding: 10px;
}

input, button {
  display: block;
  margin: 10px auto;
  padding: 4px;
}
~~~


## Evento submit

Na aulas passadas, quando a gente queria adicionar um evento de click em um elemento, a gente atrelava um listener de eventos diretamente no elemento que ia ser clicado. Para enviar o **form** o botão Enviar será clicado, porém quando queremos escutar o envio de um formulário, ao invés de atrelarmos o listener de eventos no botão, iremos atrelar no **form**. Pois no fim das contas, o **form** que está sendo enviado e não o botão. 

Usaremos o método **preventDefault** do *event* para evitar que a página seja recarregada, pois esse é um comportamento padrão do evento *submit*. 

**App.js**

**Primeira forma de se obter o valor do input**
~~~

const form = document.querySelector('.signup-form')
const userNameInput = document.querySelector('#username')

form.addEventListener('submit', event => {
  event.preventDefault()

  console.log(userNameInput.value)
})
~~~

**Segunda forma de se obter o valor do input**

Quando um **input** dentro de um formulário tem um **id**, ou um **name** podemos obter a referência desse **input** através da referência do **form** e do **id** ou do **name** do **input**.

E se quisermos obter o valor do **input**, usamos a propriedade *value* na referência do **input**.

~~~

const form = document.querySelector('.signup-form')

form.addEventListener('submit', event => {
  event.preventDefault()

  console.log(form.username.value)
})
~~~

**Mais outra forma de obter o valor do input**

~~~
const form = document.querySelector('.signup-form')

form.addEventListener('submit', event => {
  event.preventDefault()

  console.log(event.target.username.value)
})
~~~
