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
    <p class="feedback"></p>
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

**App.js**

~~~
const form = document.querySelector('.signup-form')

const feedback = document.querySelector('.feedback')

form.addEventListener('submit', event => {
  event.preventDefault()

  const username = event.target.username.value
  const usernameRegex = /^[a-zA-z]{6,12}$/
  const isAValidUsername = usernameRegex.test(username)

  if (isAValidUsername) {
    feedback.textContent = 'username válido'
    return
  }

  feedback.textContent = 'O username deve conter entre 6 a 12 caracteres e deve conter apenas letras.'
})
~~~

O código acima irá validar o valor inserido no input com uma regex e exibirá uma mensagem para o usuário.

A validação consiste em verificar se o valor do username tem de 6 a 12 caracteres, sendo eles letras maiúsculas ou minúsculas, sem nenhum número ou caractere especial. 