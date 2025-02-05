## Prototypes

Em javascript todo novo objeto criado, herda propriedades e métodos do seu *prototype* ou protótipo.
O *prototype* é o objeto do qual o novo objeto criado herda propriedades e métodos.

Cada tipo de objeto em javascript tem um *prototype*. Ele é um objeto único, nativo da linguagem, que é só referenciado quando se cria um novo objeto. 

```
function Student (name, email) {
  this.name = name
  this.email = email
}

Student.prototype.login = function login () {
  return `${this.name} fez login`
}

const pedroPaulo = new Student('Pedro Paulo', 'pp@gmail.com')
const mariaAtila = new Student('Maria Atila', 'atilamaria@gmai.com')

console.log(pedroPaulo.login()) -> Pedro Paulo fez login

```

Lembrando que classes fazem a atribuição do *prototype* automaticamente, então não é necessário declarar diretamente os métodos no *prototype* do objeto, como é feito nas funções construtoras.

Se declararmos uma propriedade na função construtora e atribuir uma função diretamente para essa propriedade, estaremos declarando um **método estático**. Um **método estático** é um método que ao invés de ser declarado no *prototype* do objeto que a função construtora cria, é declarado diretamente na função construtora e é invocado através da referência da função construtora. Exemplo: ``` Array.from()```

E quando é útil declarar um método estático ao invés de declarar um método no *prototype* dos objetos? Vai ser útil quando precisarmos declarar um **método utilitário** Ele é um método que pode ser útil em situações frequentes na nosso aplicação.

```
Student.formatToDatabase = function formatToDatabase (aString) {
  return aString
    .toUpperCase()
    .replaceAll(' ', '_')
}

console.log(Student.formatToDatabase('string para o banco de dados')) -> STRING_PARA_O_BANCO_DE_DADOS

``` 
