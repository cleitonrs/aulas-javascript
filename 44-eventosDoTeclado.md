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

.success {
  border: 2px solid green;
}

.error {
  border: 2px solid red;
}
~~~

**App.js**

~~~
const form = document.querySelector('.signup-form')

const feedback = document.querySelector('.feedback')

const testUsername = username => /^[a-zA-z]{6,12}$/.test(username)

form.addEventListener('submit', event => {
  event.preventDefault()

  const username = event.target.username.value
  const isAValidUsername = testUsername(username)

  if (isAValidUsername) {
    feedback.textContent = 'username válido'
    return
  }

  feedback.textContent = 'O username deve conter entre 6 a 12 caracteres e deve conter apenas letras.'
})

form.username.addEventListener('keyup', event => {
  const isAValidUsername = testUsername(event.target.value)

  if (isAValidUsername) {
    form.username.setAttribute('class', 'success')
    return
  }

  form.username.setAttribute('class', 'error')
})
~~~

## Keyup event

No código acima iremos fazer a validação no momento em que o usuário estiver digitando, para que tenhamos um feedback em tempo real. 

O **keyup event** irá executar uma função de callback toda vez que a tecla pressionada for liberada.

