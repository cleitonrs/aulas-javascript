Boolean serve para verificar uma condição no código, retornando um valor verdadeiro ou falso(true/false).

##
**Booleans e comparações**

console.log(true, false, 'true', 'false') -> true false "true" "false"

##
**Métodos podem retornar booleans**

const email = 'brucewayne@batman.com.br'

const includes = email.includes('wayne')

const names = ['dio', 'roger', 'robert']

const arrayIncludes = names.includes('roger')

console.log(includes) -> true

console.log(arrayIncludes) -> true

##
**Operadores de comparação**

const age = 31

console.log(age == 31) -> true

console.log(age == 35) -> false

console.log(age != 31) -> false

console.log(age > 31) -> false

console.log(age < 32) -> true

console.log(age <= 31) -> true

console.log(age >= 31) -> true
##
const name = 'cleiton'

console.log(name == 'cleiton') -> true

console.log(name = 'Cleiton') -> false

console.log(name > 'belinha') -> true / Como a letra **c** bem depois da **b**, então é maior, pois as últimas letras do alfabeto são maiores que as primeiras letras de alfabeto.

console.log(name > 'Cleiton') -> true / Uma letra **minúscula** é maior que uma letra **maiúscula** no javascript.

console.log(name > 'Belinha') -> true

##
**'igual a' e 'diferente de'**

console.log(age == 31) -> true

console.log(age == '31') -> true / toda vêz que um duplo sinal de igual ou um sinal de exclamação seguido de um sinal de igual são usados, ambos executam conversão de tipos.

console.log(age != 31) -> false

console.log(age != '31') -> false

##
**'igual a, e do mesmo tipo' e 'diferente de, e do mesmo tipo'(comparação estrita)**

console.log(age === 31) -> true

console.log(age === '31') -> false 

console.log(age !== 31) -> false

console.log(age !== '31') -> true