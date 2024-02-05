## Callback Hell

```
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

getTodos((error, data) => {
  console.log('Callback executado')

  if (error) {
    console.log(error)
    return
  }

  console.log(data)
})
```

O código acima está invocando a getTodos uma só vêz para que o request seja feito uma vêz para obter o todos.json e exibir os dados no console.

Caso tenhamos múltiplos arquivos e seja necessário obter um após o outro, uma das formas de fazer isso é da seguinte forma:

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

getTodos('./json/todos.json'(error, data) => {
  console.log(data)
  getTodos('./json/todos-02.json', (error, data) => {
    console.log(data)
    getTodos('./json/todos-03.json', (error, data) => {
      console.log(data)
    })
  })

})
```

O código acima espera o request anterior ser finalizado, para só então fazer o próximo request. Porém esse código é pouco legível e sua indentações formam um triângulo, onde comumente é chamado de callback hell.

