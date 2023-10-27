## Variáveis e escopo de bloco

Escopo é área em que o valor de uma variável está disponível pra gente. Quando a variável é definida fora de um bloco de código, ela tem valor global, ou seja, ela pode ser usada em qualquer lugar do código. E quando ela é definida dentro de um bloco de código ela tem valor local, podendo ser utilizada somente no bloco.

~~~
let age = 31

if (true) {
  age = 41
  console.log(`Dentro do 1º bloco de código:${age}`)
}

console.log(`Fora do bloco de código: ${age}`)
~~~

A saída de age em ambos consoles será 41, já que age teve seu valor reatribuído.

Podemos criar uma variável de mesmo nome, desde que ela não esteja no mesmo escopo uma da outra.

~~~
let age = 31

if (true) {
  let age = 41
  console.log(`Dentro do 1º bloco de código:${age}`)
}

console.log(`Fora do bloco de código: ${age}`)
~~~

O valor de age no primeiro console será 41 e o valor de age no segundo console será 31.
