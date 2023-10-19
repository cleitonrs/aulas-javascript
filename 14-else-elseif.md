## else e else if 

~~~
const password = 'senha123'

if (password.length >= 8) {
  console.log('Essa senha tem 8 ou mais caracteres')
} else {
  console.log('A senha deve conter 8 ou mais caracteres')
}
~~~

Para verificar até duas condições, usamos o **if** e **else** onde somente a condição verdadeira será executada.

##

Para verificar mais de duas condições, podes utilizar o **else if**

~~~

const password2 = 'senha1234321'

if (password2.length >= 12) {
  console.log('Senha muito forte!')
} else if (password2.length >= 8) {
  console.log('Essa senha tem 8 ou mais caracteres')
} else {
  console.log('A senha deve conter 8 ou mais caracteres')
}
~~~ 

A saída do console.log() será -> Senha muito forte!