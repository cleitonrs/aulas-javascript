## O objeto Math

~~~
console.log(Math)
console.log(Math.PI) -> exibe a constante matemática pi -> 3.141592
console.log(Math.E) -> representa a base dos logaritmos naturais -> 2.71828

const area = 7.7

console.log(Math.round(area)) -> o método round converte um número decimal em um número inteiro da forma padrão -> 7

console.log(Math.floor(area)) -> o método floor sempre irá arredondar o número para baixo. -> 7

console.log(Math.ceil(area)) -> o método ceil sempre irá arredondar o número para cima. -> 8

console.log(Math.trunc(area)) -> o método trunc remove o decimal do número que ele recebeu como argumento e retorna a pate inteira dele. -> 7

~~~

## números aleatórios

~~~
const randomNumber = Math.random() -> o método random gera um número decimal, aleatório entre 0 e 1 -> 0.22334234

console.log(randomNumber)

console.log(Math.round(randomNumber * 100)) -> gera um número aleatório entre 0 e 100 -> 5
~~~
