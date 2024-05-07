## Async Await

Async e Await são duas palavras chave no javascript que usam Promises por baixo dos panos, que permitem a criação de um código ainda mais legível, que é lido como se fosse síncrono.

Quando usamos Async Await, podemos setar um código assíncrono em uma função e usar dentro dessa função a palavra *await* pra lidar com Promise de uma forma mais legível. Com eles, evitamos de usar encadeamento de Promises.

Quando usamos a palavra chave *assync* na frente da declaração de uma função, ela passa a ser uma função assíncrona. Isso significa que quando a função for invocada, ela irá retornar uma Promise, independente do conteúdo dentro dela.

No código da função assíncrona abaixo, antes da invocação do *fetch* usamos a palavra chave *await* que irá aguardar a reposta da requisição chegar, para só então os códigos posteriores serem executados.

O *await* também foi usado na frente da invocação do *response.json()* devido ao fato dele retornar uma Promise.

Uma função *assync* sempre retorna uma Promise que encapsula o valor que a função está retornando.

``` 

const getUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  return await response.json()
}

const logUsers = async () => {
  const users = await getUsers()
  console.log(users)
}

console.log(1)
console.log(2)

logUsers()

console.log(3)
console.log(4)

```
No código acima, todos os consoles.log serão executados e depois que a operação assíncrona da logUsers() é finalizada, no final da thread o array de usuários será exibido no console.
