## Trabalhando com JSON (Javascript Object Notation)

O JSON é um formato para troca de dados, que a maioria das APIs retornam quando um request é feito para elas. O JSON parece um array com vários objetos, mas ná verdade ele não é. Ele é um texto em formato JSON, ou seja, ele é uma string formatada de um jeito que parece que são objetos javascript com pares de chave e valor, mas ainda assim é uma string.

Ele precisa ser string porque, quando um browser troca informações com um servidor, essas informações precisam ser strings, é por isso que o JSON é usado nessas trocas de informações.

Precisamos converter a string JSON em um objeto javascript, para podermos acessar esses objetos e fazer alguma coisa com eles.

O javascript possui um objeto embutido chamado JSON, o qual possui um método chamado **parse()**. O **parse** recebe como argumento uma string JSON e converte esse JSON para um array de objetos

~~~
const getTodos = callback => {

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

  request.open('GET', './todos.json')
  request.send()
}

console.log(1)
console.log(2)

getTodos((error, data) => {
  console.log('Callback executado')

  if (error) {
    console.log(error)
    return
  }

  console.log(data)
})

console.log(3)
console.log(4)
~~~

Na hora de se criar um JSON, a principal diferença entre um objeto javascript é que todas as propriedades precisam estar entre a abertura e fechamento de **aspas duplas**.
