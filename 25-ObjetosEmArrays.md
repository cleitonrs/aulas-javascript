## Objetos em arrays

~~~
let user = {
  name: 'João',
  age: 32,
  email: 'joaocardoso@gmail.com',
  city: 'São Paulo',
  blogPosts: [
    { title: 'Empadão de frango', likes: 30},
    { title: '4 receitas de purê de batata', likes 50}
  ],
  login: function () {
    console.log('Usuário logado')
  },
  logout: function() {
    console.log('Usuário deslogado')
  },
  logBlogPosts: function () {
    console.log(`${this.name} escreveu os seguintes posts:`)

    this.blogPosts.forEach(post.title, post.like => {
      console.log(post.title, post.like)
    })
  }
}

user.logBlogPosts() -> 
  João escreveu os seguintes posts:
  Empadão de frango 30
  4 receitas de purê de batata 50
~~~
