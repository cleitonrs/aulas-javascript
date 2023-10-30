## A palavra-chave this

O **this** é um objeto de contexto, ele representa o contexto atual no qual o código está sendo executado. E dependendo de como ou onde a gente usa o **this**, o valor dele vai mudar.

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
  },
  logBlogPosts: function () {
    console.log(`${this.name} escreveu os seguintes posts:`)

    this.blogPosts.forEach(post => {
      console.log(post)
    })
  }
}

user.logBlogPosts() -> 
  João escreveu os seguintes posts:
  Empadão de frango
  4 receitas de purê de batata
~~~

Quando usamos uma function declaration como método e invoca esse método, o valor que o javascript atribui ao **this** é o objeto no qual o **this** está sendo usado, que nesse caso é o **user**.

Então quando formos usar o **this** dentro de um método, se a gente quiser que o **this** referencie o objeto no qual o método foi criado, a gente precisa usar uma **function declaration** ao invés de uma **arrow function**.

No exemplo abaixo veremos como escrever a função com uma sintaxe mais curta. Ao remover a palavra chave **function** e os **:**, o javascript também irá entender que ali é uma **function declaration**.

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
  logout () {
    console.log('Usuário deslogado')
  },
  logBlogPosts () {
    console.log(`${this.name} escreveu os seguintes posts:`)

    this.blogPosts.forEach(post => {
      console.log(post)
    })
  }
}
~~~
