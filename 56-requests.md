## Requests HTTP

Dentro das nossas aplicações, informações que estão armazenadas em um outro lugar precisarão ser exibidas, podendo ser um banco de dados ou uma API(Application Programming Interface). E para obter essas informações, fazemos requisições HTTP, para se conectar ao banco de dados ou API.

Uma requisição é um solicitação ou pedido de informações que o banco de dados ou API armazenam. Quando fazemos um *request HTTP* para uma API ou servidor, fazemos esses requests para um *endpoint*. Um *endpoint* é uma URL que a API ou servidor, disponibiliza para usarmos e obter informações que a API ou servidor armazenam.

Exemplo de endpoint: http;//apidemusicas.com/artista/slipknot

Quando fazemos um request do browser para um endpoint, geralmente o formato da resposta que iremos obter será um JSON(Javascript object notation), que é um padrão usado para troca e armazenamento de informações de sistemas e é suportado pela maioria das linguagens atuais.

#

Agora veremos como fazer requisições HTTP no javascript. Para isso iremos criar um objeto de request através da palavra chave **new**

Para começar a usar o objeto para requisitar dados, precisamos abrir uma requisição usando o método **open()** onde ele deverá receber dois argumentos, o primeiro é uma string com o método de request HTTP que queremos fazer, e o segundo é o endpoint ao qual deverá ser enviado o request para obter dados.

Para enviar o request, devemos usar o método **send()**

Para saber se resposta foi obtida e começar acessar os dados dessa resposta, podemos trackear o processo da requisição em um eventListener em um evento específico chamado *readystatechange*
~~~
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', () => {
  if (request.readyState === 4) {
    console.log(request.responseText)
  }
})

request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
request.send()
~~~

No código acima, iremos ver os todos que foram obtidos com a requisição em formato de JSON. O *readyState = 4* verifica se a requisição foi concluída.
