## O método setInterval()

Semelhante ao método **setTimeout()** o método **setInterval()** terá a função executada repetidamente, e a repetição da execução dessa função irá acontecer no intervalo de tempo que a gente especificar.

~~~
setInterval(() => {
  console.log('1 segundo se passou')
}, 1000)
~~~

No código acima, 1 segundo após a página ser carregada, a mensagem será exibida no console, e a cada novo 1 segundo, a mensagem será repetida até a página ser recarregada novamente.

Porém o código acima resulta em um loop infinito, já que a repetição não está sendo cancelada. Para resolver isso veremos o código abaixo:

## clearInterval()

~~~
let counter = 0

const timer = setInterval(() => {
  console.log('1 segundo se passou')
  counter++

  if (counter === 5) {
    clearInterval(timer)
  }
}, 1000)
~~~

O método **clearInterval()** cancela a repetição do **setInterval()**. Só que para fazer isso ele precisa do *ID* do **setInterval**. A invocação do **setInterval** retorna um *ID*, que ao armazenarmos o **setInterval** na const timer, o *ID* passa a ser referenciado nela. Por isso passamos o timer como argumento do método **clearInterval**

