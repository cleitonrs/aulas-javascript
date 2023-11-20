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

**App.js**

~~~
const form = document.querySelector('.signup-form')

form.addEventListener('submit', event => {
  event.preventDefault()

  console.log(event.target.username.value)
})

const userName = 'cleiton'
const pattern = /^[a-z]{8,}$/
const result = pattern.test(userName)

console.log(result) -> false

~~~
## O método test()

Em javascript toda **regex** tem disponível um método **test**. Esse método irá tentar dar um match entre a **regex** e a string que especificarmos como argumento do método. A invocação do **test** sempre irá retornar um **boolean**.

## O método search()

~~~
const username = 'cleiton123'
const result = username.search(pattern)

console.log(result) -> -1
~~~

Ao contrário do **test()** que é um método de regex, o **search()** é um método de string, no qual ele ele recebe como argumento a regex que a gente que testar. O valor que o **search()** retorna é um número inteiro que corresponde ao index no qual o match aconteceu. Toda vez que o match entre a regex e a string não acontece, o **search()** retorna **-1**.

~~~
const anotherUserName = '123cleiton'
const anotherPattern = /[a-z]{7,}/

const result = anotherUserName.search(anotherPatter)

console.log(result) -> 3
~~~

No código acima o index da string no qual o início do match aconteceu foi **3** 
