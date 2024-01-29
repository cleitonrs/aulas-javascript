## Status de respostas HTTP

~~~
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', () => {
  if (readyState === 4) {
    console.log(request.responseText)
  }
})

request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
request.send()
~~~

Agora que checamos se o estado de request é igual a 4, para termos certeza que a resposta foi obtida, veremos sobre status de resposta HTTP.

1. Informational responses (100-199),
2. Successful responses (200-299),
3. Redirects (300-399)
4. Client erros (400-499),
5. and Server erros (500-599).

~~~
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', () => {
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.responseText)
  }
})

request.open('GET', 'https://jsonplaceholder.typicode.com/todoss')
request.send()
~~~

No código acima, só será exibido um aviso com status code 404, informando que o servidor não conseguiu encontrar a página deseja. Isso acontece devido ao erro do endpoint que conta com um caractere a mais em *todos* e o bloco do if não será executado pois o status code não é 200. 
