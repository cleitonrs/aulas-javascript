## Código assíncrono em javascript

Uma operação assíncrona é um código que inicia um processo agora e finaliza esse processo posteriormente.

Por natureza, o javascript é uma linguagem síncrona, ou seja, ele executa uma instrução por vez, de cima para baixo.

~~~
console.log('Linha 1')
console.log('Linha 2')
console.log('Linha 3')
~~~

Cada console.log acima só será executado após o anterior ser executado.

No código síncrono, uma instrução é executada após a outra de forma sequencial.

#

~~~
console.log(1)
console.log(2)

setTimeout( () => {
  console.log('Função de callback executada')
}, 2000)

console.log(3)
console.log(4)
~~~

A saída do código acima será: 

1

2

3

4

função de callback executada

O setTimeout é uma operação assíncrona, logo todos os console.log serão executados sem bloqueio.
