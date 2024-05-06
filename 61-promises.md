## Promises

Uma Promise é um objeto que representa o sucesso ou a falha de uma operação assíncrona. Uma Promise sempre vai ter dois resultados possíveis: _resolved_ que significa que os dados foram obtidos e _rejected_ que significa que um erro aconteceu e a Promise foi rejeitada.

Para criar uma Promise no código abaixo, foi criado uma const getData que recebe uma função. Dentro dessa função foi inserido um _Return new Promise()_. Como argumento da invocação desse construtor, deve-se passar uma função que contenha um parâmetro _resolve_ e _reject_. Esses dois parâmetros são funções embutidas da API de Promises que se recebe como parâmetros na função.

Para acessar o valor que uma Promise está encapsulando, iremos precisar do método _Then()_. O método _Then()_ é o responsável por receber a resposta de sucesso da Promise. Como argumento do _Then()_ passamos uma função, que recebe um parâmetro chamado _value_ o qual receberá como valor, o valor passado como argumento da invocação da _resolve_.

Para tratar erros usando Promise, usamos o método _catch()_ que pode ser encadeado com o método _Then()_. O método _catch()_ também recebe uma função como argumento e é usando o _catch()_ que iremos cuidar com o que deve acontecer, quando a resposta obtida da operação, não for uma resposta de sucesso. O _catch()_ só será executado em duas situações: quando a função _reject_ dentro da Promise é invocada ou quando o código dentro de algum _Then()_ lança algum erro.

```
const getTodos = (url, callback) => {

  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', () => {
    const isRequestOk = request.readyState === 4 && request.status === 200
    const isRequestNotOk = request.readyState === 4

    if (isRequestOk) {
      const data = JSON.parse(request.responseText)
      callback(null, data)
    }
    else if (isRequestNotOk) {
      callback('Não foi possível obter os dados', null)
    }
  })

  request.open('GET', url)
  request.send()
}

const getData = () => {
  return new Promise((resolve, reject)) => {
    resolve('Dados aqui')
    // reject('Erro aqui')
  }
}

getData()
  .then(value => console.log(value)) -> 'Dados aqui'
  .catch(error => {
    console.log(error)
  })
```

Vamos refazer o código acima.

```
const getTodos = url => new Promise((resolve, reject) => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange',() => {
    const isRequestOk = request.readyState === 4 && request.status === 200
    const isRequestNotOk = request.readyState === 4

    if (isRequestOk) {
      const data = JSON.parse(request.responseText)
      resolve(data)
    }

    else if (isRequestNotOk) {
      reject('Não foi possível obter os dados')
    }
  })

  request.open('GET', url)
  request.send()
})

getTodos('https://pokeapi.co/api/v2/pokemon/1')
  .then(pokemon => console.log(pokemon))
  .catch(error => console.log(error))
```

### Encadeamento de Promises

As Promises podem ser encadeadas, para realizar operações assíncronas sequenciais.

```
const getTodos = url => new Promise((resolve, reject) => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange',() => {
    const isRequestOk = request.readyState === 4 && request.status === 200
    const isRequestNotOk = request.readyState === 4

    if (isRequestOk) {
      const data = JSON.parse(request.responseText)
      resolve(data)
    }

    else if (isRequestNotOk) {
      reject('Não foi possível obter os dados')
    }
  })

  request.open('GET', url)
  request.send()
})

getPokemon('https://pokeapi.co/api/v2/pokemon/1')
  then(bulbasaur => {
    console.log(bulbasaur)
    return getPokemon('https://pokeapi.co/api/v2/pokemon/4')
  })
  .then(charmander => {
    console.log(charmander)
    return getPokemon('https://pokeapi.co/api/v2/pokemon/7')
  })
  .then(console.log())
  .catch(error => console.log(error))
```