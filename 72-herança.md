## Herança Prototipal

Usando funções construtoras, para fazer uma função construtora herdar propriedades e métodos de outra função construtora, usamos o método ```call()```. O *call* irá invocar uma determinada função e forçar que o *this* da função filha armazene o valor desejado.

``` 
function Student (name, email) {
  this.name = name
  this.email = email
}

// Herança prototipal
Student.prototype.login = function login () {
  return `${this.name} fez login`
}

TeacherAssist.prototype = Object.create(Student.prototype)

function TeacherAssist (name, email, scheduleWeekPosts) {
  Student.call(this, name, email, scheduleWeekPosts)
  this.scheduleWeekPosts = scheduleWeekPosts
}

```
