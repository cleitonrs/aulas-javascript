## LocalStorage

**LocalStorage** é um objeto do tipo storage. Esse objeto é uma interface(objeto que proporciona a ligação entre o código javascript e a webStorageAPI) para trabalhar com a localStorage da webStorageAPI.

A localStorage armazena items, que são um par de chave e valor, parecido com um objeto javascript. Cada *chave* e *valor* que armazenamos na locaStorage, tem que ser uma *String*

Para armazenar um item na localStorage, usamos o método *setItem()*, que possui dois argumentos obrigatórios, a chave e o valor do item. Toda chave e valor devem ser *String*.

```
locaStorage.setItem('name', 'Pedro')
localStorage.setItem('age', '25')

```
Para obter os dados da localStorage, usamos o método *getItem()*, que irá trazer os dados do item que for especificado.

```
let name = localStorage.getItem('name')
let age = localStorage.getItem('age')

console.log(name, age) -> Pedro 25

```
Uma vez que armazenamos dados na localStorage, podemos recarregar a página várias vezes, que os dados serão persistidos. Os dados são vai sair da localStorage, se forem removidos ou se o usuário limpar o *cash* do browser.

Para modificar os valores dos items armazenados no localStorage, usamos o método *setItem()* novamente.

```
localStorage.setItem('name', 'Maria')
localStorage.setItem('age', '12')

name = localStorage.getItem('name')
age = localStorage.getItem('age')

console.log(name, age) -> Maria, 12

```

Existem duas formas de remover os dados da localStorage. A primeira forma consiste em remover um item específico e a segunda forma consiste em remover todos os items. Para remover somente um item, usamos o método *removeItem()*, que recebe como argumento o nome da chave do item que será removido. Para limpar completamente a localStorage usamos o método *clear()*

```
localStorage.removeItem('name')

name = localStorage.getItem('name')
console.log(name) -> null

localStorage.clear()

```

Podemos armazenar dados mais complexos na localStorage, como um array de objetos, por exemplo. Para isso devemos converter o array de objetos em *String*. Quando for obter o array da localStorage, ele será uma *String* e será necessário parsear essa string de volta pra array, o que chamamos de serialização.

Para converter um objeto javascript em *String*, usamos o método de um objeto global JSON, chamado *stringfy()*, que recebe como argumento um objeto ou um array.

```
const myArray = [
  { a: 1, b: 2 },
  { c: 3, d: 4 },
  { e: 5, d: 6 }
]

console.log(typeof JSON.stringfy(myArray)) -> string

// Armazenando o objeto na localStorage
localStorage.setItem('myArray', JSON.stringfy(myArray))

// Obter o JSON que myArray está armazenando
const JSONFromLocalStorage = localStorage.getItem('myArray')

// Para converter esse JSON em javascript
const myConvertedArray = JSON.parse(JSONFromLocalStorage)

console.log(myConvertedArray) -> 
0: { a: 1, b: 2 }
1: { c: 3, d: 4 }
2: { e: 5, d: 6 }

```
