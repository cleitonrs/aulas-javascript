## Arrays

~~~
let heroes = ['Batman', 'Superman', 'Iron Man']

const ages = [31, 25, 39, 40, 25]

console.log(ages[2]) -> 39

const randomArray = ['Parker', 'Diana', 19, 18]
~~~

## Métodos de arrays

O método **join()** retorna uma nova string com todos os items do array concatenados e separados por vírgula(default). O **join()** também pode receber um argumento opcional, que será o separador.

~~~
const joinHeroes = heroes.join()

console.log(joinHeroes) -> Batman,Superman,Iron Man

const joinHeroesBy = heroes.join('|')

console.log(joinHeroesBy) -> Batman|Superman|Iron Man

const indexOf25 = ages.indexOf(25)

console.log(indexOf25) -> 1
~~~

##
O método **concat()** pode concatenar dois arrays sem modificar o array original

~~~
const moreHeroes = heroes.concat(['Catwoman', 'Wolverine'])

console.log(moreHeroes) -> ['Batman', 'Superman', 'Iron Man', 'CatWoman', 'Wolverine']
~~~

##
O método **push()** além de adicionar itens no array, retorna o nove número de itens que tem no array. O método **push()** causa mutabilidade no array, ou seja, ele modifica o valor do array original.

~~~
const pushToHeroes = heroes.push('Cyclops', 'Hulk')

console.log(pushToHeroes) -> 5

console.log(heroes) -> ['Batman', 'Superman', 'Iron Man', 'Cyclops', 'Hulk']
~~~


##
O método **pop()** remove o último item do array e retorna esse item. **pop()** também causa mutabilidade.

~~~
const popHeroes = heroes.pop()

console.log(popHeroes) -> Hulk

console.log(heroes) -> ['Batman', 'Superman', 'Iron Man', 'Cyclops']
~~~