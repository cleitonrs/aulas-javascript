## Requests sequenciais vs paralelos

Diferenças importantes entre requests paralelos vs requests sequenciais.

No código abaixo temos um exemplo de requests sequenciais, ou seja, a segunda requisição só vai acontecer, depois que a Promise resolvida ou rejeitada, da primeira requisição do *fetch* for obtida e a expressão que resulta no valor da Promise, que é o objeto request, for atribuída pra const bulbasaur. Lembrando que o *awit* pausa a execução das linhas abaixo dele enquanto a Promise não for resolvida ou rejeitada.

Mas como os requests do código abaixo não dependem de informações dos outros requests, eles não precisam ser sequenciais, pois eles são independentes entre si, sem ralação alguma.

Então podemos fazer esses requests serem paralelos, como veremos mais abaixo.

```

const getPokemons = async () => {
  const bulbasaur = await fetch('https://pokeapi.co/api/v2/pokemon/1')
  const charmander = await fetch('https://pokeapi.co/api/v2/pokemon/4')
  const squirtle = await fetch('https://pokeapi.co/api/v2/pokemon/7')
  console.log(await bulbasaur.json())
  console.log(await charmander.json())
  console.log(await squirtle.json())
}

getPokemons()

``` 

Vamos remover os *awaits* antes das invocações do *fetch* para que ele execute as requisições quase que ao mesmo tempo e as Promises das requisições sejam armazenadas nas consts.

Para se obter os valores das const que são os objetos requests, iremos usar um método do objeto construtor Promise chamado *all*. O **Promise.all()** é um método que recebe como argumento um array de Promises e quando todas as Promises que ele recebeu forem resolvidas, ele retorna uma única Promise que contém um array com os valores das Promises resolvidas. Se uma das Promise que o **Promise.all()** recebeu for rejeitada, ele retornará a Promise rejeitada com a mensagem e o erro que causou a rejeição.

```
const getPokemons = async () => {
  const bulbasaur =  fetch('https://pokeapi.co/api/v2/pokemon/1')
  const charmander =  fetch('https://pokeapi.co/api/v2/pokemon/4')
  const squirtle =  fetch('https://pokeapi.co/api/v2/pokemon/7')
  
  const results = await Promise.all([bulbasaur, charmander, squirtle])
  results.forEach(async response => console.log(await response.json()))
}

getPokemons()

``` 
O código acima será executado depois que todas as Promises forem resolvidas.
