## Fetch API

A Fetch API é uma interface nativa do javascript e também é uma forma mais moderna e rápida de se fazer requisições http. A Fetch API usa Promisses por baixo dos panos. 

Para buscar dados usando *fetch*, invocamos *fetch* passando o endpoint como argumento. A invocação do *fetch* retorna uma Promisse.

A forma como a Fetch API trabalha é rejeitando a Promisse só quando ocorre um erro de conexão na rede. Então na primeira função do *then* devemos verificar se o status da response é 200, pra só então fazer alguma coisa com a resposta ou então fazer alguma coisa com o erro se o status for 404.

O *response.json()* é o método que irá obter a resposta que o response está armazenando e parsear essa resposta. Ou seja, esse método irá retornar a resposta já parseada em um array de objetos javascript. Como o *response.json()* retorna uma Promisse, podemos encadear um *then* na expressão, pois ela resulta em uma Promisse.

### Resumindo

1 - Buscamos os dados através da invocação do método *fetch*

2 - Obtemos a resposta e retornamos uma Promisse com o *response.json()*

3 - Encadeamos um segundo *then* na Promisse que o primeiro *then* está retornando, para dentro dessa função, fazermos alguma coisa com os dados obtidos.

```
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    console.log('Response', response)
    return response.json()
  })
  .then(users => console.log(users))
  .catch(error => console.log(error))

```
