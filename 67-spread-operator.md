## Spread Operator

O operador *spread* nos permite copiar todo ou parte de um array existente ou objeto em outro array ou objeto.

```
const numbersOne = [1, 2, 3]
const numbersTwo = [4, 5, 6]
const numbersCombined = [...numbersOne, ...numbersTwo]

console.log(numbersCombined) -> [1, 2, 3, 4, 5, 6]

const obj1 = { prop1: 1, prop2: 2 }
const obj2 = { prop3: 3, prop4: 4 }
const obj3 = { ...obj1, ...obj2 }

console.log(obj3) -> { prop1: 1, prop2: 2, prop3: 3, prop4: 4 }

```
O operador *spread* também pode ser usado para lidar com strings. Podes por exemplo, espalhar os caracteres de uma string em um array.

```
const str = 'abc'

console.log([...str]) -> [ "a", "b", "c" ]

```

O operador *spread* também pode ser usado em funções.

```
const numbers = [7, 3, 5, 3.1, 9]

console.log(Math.min(...numbers)) -> 3
console.log(Math.max(...numbers)) -> 9

```
