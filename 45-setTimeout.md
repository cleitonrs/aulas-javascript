## O método setTimeout()

O método **setTimeout()** executa uma função após uma certa quantidade de tempo que a gente especificar. Ele recebe dois argumentos, sendo o primeiro argumento uma função e o segundo argumento o tempo em milesegundos, em que a função do primeiro argumento deve ser executada. 

~~~
setTimeout(() => {
  alert('executou')
}, 2000)
~~~

No código acima um alert será executado no navegador com a mensagem "executou" após 2 segundos da página ter sido carregada.
