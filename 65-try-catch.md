## Try e Catch

O *try* e o *catch* servem para fazer tratamentos de erros. Quando um erro é lançado em uma aplicação javascript, o código abaixo do código que disparou o erro, não é executado.

No código abaixo o segundo console.log não será executado, devido ao erro gerado no primeiro console.log.

```
console.log(oi)
console.log('oi')
```

Para evitarmos que um erro na aplicação faça ela parar de ser executada, usamos o *try catch* que é uma cláusula que vai tentar executar um código. Se o código que ela tentar executar lançar algum erro, podemos executar algum outro código e o erro que foi lançado não vai travar o restante do código da aplicação.

No código abaixo, o código que queremos tentar executar fica no escopo do *try* e se ele lançar algum erro, esse erro será recebido como parâmetro do *catch* e dentro do bloco do *catch* podemos tratar o erro. Com isso o código abaixo do *try catch* será executado e a string 'oi' será exibida no console.

```
try {
  console.log(oi)
} catch (erro) {
  console.log(error)
}
console.log('oi')
```

E agora que temos o erro dentro do *catch*, podemos usar informações desse erro pra executar alguma ação. Em javascript, todo objeto de erro tem as propriedades **name** e **message** que armazenam o nome e a mensagem do erro. Então a partir dessas informações do objeto de erro, podemos fazer alguma coisa.

```
try {
  console.log(oi)
} catch (erro) {
  if (error.name === 'ReferenceError' && error.message === 'oi is not defined') {
    const oi = 'const oi criada'
    console.log(oi)
  }
}
console.log('oi')
```

Usamos o *try catch* quando queremos fazer alguma coisa em relação ao objeto de erro que o *catch* recebe. Ele existe para podermos lidar com o erro que o código pode lançar. Se esse não for o caso, podemos usar o *if*. O *try catch* exige mais do poder de processamento do que condicionais como o *if*.
