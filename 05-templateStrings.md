~~~
const postTitle = 'É bolacha ou biscoito?'

const postAutor = 'Matheus Saad'

const postComments = 15
~~~

##
**Usando concatenação**

~~~
const postMessage = 'O post"' + postTitle + '" do, ' + postAuthor + ', tem ' + postComments + ' comentários.'

console.log(postMessage) -> O post "É bolacha ou biscoito?" do, Matheus Saad, tem 15 comentários.

console.log('Você manja do filme \'As Branquelas\'?') -> Você manja do filme 'As Branquelas'?
~~~

##
**Usando template strings**

~~~
const postMessage = `O post "${postTitle}", do ${postAuthor}, tem ${postComments} comentários.`

console.log(postMessage) -> O post "É bolacha ou biscoito?" do, Matheus Saad, tem 15 comentários.
~~~

##
**Criando templates HTML**

~~~ 
const html = `
  <h2>${postTitle}</h2>
  <p>Autor: ${postAuthor}</p>
  <span>Este post tem ${postComments} comentários</span>
`
~~~

console.log(html) -> 
~~~
  <h2>${postTitle}</h2>
  <p>Autor: ${postAuthor}</p>
  <span>Este post tem ${postComments} comentários</span>
~~~