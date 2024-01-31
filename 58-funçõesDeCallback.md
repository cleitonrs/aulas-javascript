## Funções de callback

~~~
const getTodos = () => {

  const request = new XMLHttpRequest()
  
  request.addEventListener('readystatechange', () => {
    const isRequestOk = request.readyState === 4 && request.status === 200
    const isRequestNotOk = request.readyState === 4
  
    if (isRequestOk) {
      console.log(request.responseText)
    }
    else if (isRequestNotOk) {
      console.log('Não foi possível obter os dados da API')
    }
  })
  
  request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
  request.send()
}

getTodos()
~~~

No código acima temos o código do request dentro de uma função. Agora caso seja preciso realizar alguma ação a cada vez que as respostas do request forem obtidas, podemos usar *callbacks*.


~~~
const getTodos = callback => {

  const request = new XMLHttpRequest()
  
  request.addEventListener('readystatechange', () => {
    const isRequestOk = request.readyState === 4 && request.status === 200
    const isRequestNotOk = request.readyState === 4
  
    if (isRequestOk) {
      callback(null, request.responseText)
    }
    else if (isRequestNotOk) {
      callback('Não foi possível obter os dados', null)
    }
  })
  
  request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
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

Agora que a referência da função está sendo recebida no parâmetro callback, quando o request for bem ou mal sucedido, ao invés de exibir as mensagens no console, podemos invocar o callback

Os consoles.log 1, 2, 3 e 4 serão executados sem travamento, pois a função getTodos é assíncrona.
