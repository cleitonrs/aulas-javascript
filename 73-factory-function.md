## Factory Function

Uma *factory function* é qualquer função que não é uma classe, não é um construtor, não é uma função construtora, mas retorna um novo objeto. Em javascript qualquer função pode retornar um objeto. E quando uma função faz isso sem ser obrigado utilizar a palavra chave *new* antes da invocação dela, ela é uma *factory function*.

```
const createUser = (name, email) => {
  let counter = 0

  return {
    name,
    email,
    incrementCounter: () => ++counter
  } 
}

const user2 = createUser('Saulo', 'saulo@gmail.com')

```

**Closures** é a combinação de uma função com o seu escopo léxico.
