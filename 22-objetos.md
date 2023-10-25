## Objetos

Objetos possuem características, as quais chamamos de propriedades e tem ações que chamamos de métodos

Um **usuário** por exemplo, pode possuir propriedades como: e-mail, nome de usuário, idade e métodos, como login e logout

Outro exemplo seria um objeto de post de um blog, que teria como propriedades, título, conteúdo e autor. Esse objeto poderia ter como métodos: publicar, despublicar e deletar o post.

## Criando um objeto literal
~~~
let user = {
  name: 'João',
  age: 32,
  email: 'joaocardoso@gmail.com',
  city: 'São Paulo',
  blogPosts: ['Empadão de frango', '4 receitas de purê de batata']
}

console.log(user.name) -> João
~~~

**Reatribuindo o valor de uma propriedade:**
~~~
user.age = 33

console.log(user.age) -> 33

console.log(user['name']) -> João

user['name'] = 'José'

console.log(user['name']) -> José


console.log(typeof user) -> object
~~~

## Adicionando métodos

~~~
let user = {
  name: 'João',
  age: 32,
  email: 'joaocardoso@gmail.com',
  city: 'São Paulo',
  blogPosts: ['Empadão de frango', '4 receitas de purê de batata'],
  login: function () {
    console.log('Usuário logado')
  },
  logout: function() {
    console.log('Usuário deslogado')
  }
}

user.login()

user.logout()
~~~

A saída no console será: -> Usuário logado

-> Usuário deslogado
