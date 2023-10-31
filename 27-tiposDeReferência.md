## Tipos primitivos

- Numbers
- Strings
- Booleans
- Null
- Undefined
- Symbol
- BigInt
  
## Tipos de referência

- Todos os tipos de objetos
- Objetos literais
- Arrays
- Funções
- Datas
- Todos os outros objetos

##

A diferença entre eles está na forma como eles são armazenado na memória. Quando criamos um tipo primitivo, que pode ser um número ou uma string por exemplo, e a gente atribui a esse tipo uma variável ou constante, esse valor é armazenado em lugar que a gente chamade de **stack(pilha)**. 

A stack é uma pilha de diferentes valores na memória, e esses valores podem ser acessados rapidamente quando a gente precisa usar eles. Só que o espaço dentro dessa stack é limitado, então quando a gente cria um **tipo de referência** como um objeto literal ou um array, esse tipo ao invés de ser armazenado na **stack** ele será armazenado no **heap(amontoado)** 

O heap tem mais espaço disponível para ser armazenado objetos maiores e mais complexo, como objetos literais e arrays. Só que o **heap** é um pouco mais lento.

##
Quando a gente faz cópia de valores primitivos como strings, numbers e booleans, criamos uma nova cópia do valor na stack. Quando criamos uma cópia de um tipo de referência, na verdade estamos copiando o **ponteiro** que aponta pra o **heap** e isso faz que quando modificamos o objeto, essa modificação seja refletida nas duas variáveis, porque elas armazenam dois ponteiro que apontam para o mesmo objeto.

##

**valore primitivos**

~~~
let scoreOne = 50
let scoreTwo = scoreOne

console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`) -> scoreOne: 50 | scoreTwo: 50

scoreOne = 100

console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`) -> scoreOne: 100 | scoreTwo: 50
~~~

**valores de referência**

~~~
let userOne = { name: 'Cleiton', age: 41 }
let userTwo = userOne

console.log(userOne, userTwo) -> {name: "Cleiton", age: 41} {name: "Cleiton", age: 41}

userOne.age = 42

console.log(userOne, userTwo) -> {name: "Cleiton", age: 42} {name: "Cleiton", age: 42}
~~~

