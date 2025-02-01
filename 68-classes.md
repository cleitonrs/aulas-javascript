## Classes

Quando precisamos criar vários objetos que contém as mesmas características usamos a palavra chave *class*.
Uma classe é a planta de um objeto, ou seja, um modelo que descreve quais vão ser a propriedades básicas de um objeto.

Em javascript uma classe nada mais é do que um tipo de construtor. E o construtor por sua vêz é uma função.

A primeira letra do nome da classe sempre será maiúscula por convenção, para se diferenciar visualmente de funções comuns.

Dentro da classe precisamos declarar o método *constructor*, ele é o responsável por setar as propriedades do objeto.

O operador **new** é usado para que um novo objeto seja criado. Ele também é responsável para que dentro da classe o *this* referencie o novo objeto que tá sendo criado. Com isso toda vêz que usamos a palavra chave *this* dentro da classe, ele corresponde ao novo objeto que está sendo criado.
O **new** também é o responsável por invocar o método *constructor* para construir o objeto que está sendo criado.

```
class User {
  constructor (name, email) {
    this.name = name
    this.email = email
  }
}

const user = new User('Cleiton', 'oi@gmail.com')
const user2 = new User('Ana Paula', 'ap@gmail.com')

console.log(user, user2) -> User {name: "Cleiton", email: "oi@gmail.com'}
User {name: "Ana Paula", email: "ap@gmail.com"}

```

Quando um objeto é criado através de uma classe, tecnicamente cada objeto é uma instância da classe.

Se precisarmos que o objeto criado pela classe tenha um método, como faremos? Para criar um método em uma classe, não iremos criar o método dentro do *constructor*, pois ele é usado só para setar as propriedades que a classe vai ter. Para que os objetos criados pela classe tenha um método, precisamos criar esse método depois da declaração do *constructor*.

```
class User {
  constructor (name, email) {
    this.name = name
    this.email = email
    this.points = 0
  }

  login() {
    console.log(`${this.name} logou na aplicação`)
    return this
  }

  logout () {
    return `${this.name} deslogou da aplicação`
  }

  addPoint () {
    this.points++
    return `${this.name} agora tem ${this.points > 1 ? 'pontos' : 'ponto'}
  }
}

const user = new User('Cleiton', 'oi@gmail.com')
const user2 = new User('Ana Paula', 'ap@gmail.com')

console.log(user.login(), user2.login()) -> Cleiton logou na aplicação
Ana Paula logou na aplicação

user.login().addPoint()
console.log(user)

``` 

Quando precisamos encadear invocações de métodos de um objeto criado por uma classe, precisamos fazer a invocação dos métodos da classe retornar um *this*, porque o *this* dentro da classe, representa o objeto que a classe está criando.
