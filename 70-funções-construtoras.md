## Funções construtoras

Em javascript tecnicamente classes não existe, pois elas são uma abstração(processo de ocultar certos detalhes de uma implementação e expor outros, para que através de um código mais simples, possamos lidar com uma estrutura complexa).

Para criar uma função construtora usamos a seguinte sintaxe:

```
function Student (name, email) {
  this.name = name
  this.email = email
}

const pedroPaulo = new Student('Pedra Paulo', 'pp@gmail.com')
const mariaAtila = new Student('Maria Atila', 'atilamaria@gmai.com')

```

Funções construtura precisam ser uma *function declaration*, não se pode usar *arrow functions*, pois a palavra chave *this* em *arrow functions*, referencia o escopo de onde a *arrow function* foi declarada e não o objeto.
