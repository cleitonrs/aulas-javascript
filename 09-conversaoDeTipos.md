**Conversão de tipos**

let score = '100'

console.log(score + 1) -> 1001

score = Number(score)

console.log(score + 1) -> 101

console.log(typeof score) -> number

##

const crazeConversion = Number('Maçã')

console.log(crazeConversion) -> NaN / Qualquer operação matemática que não faça sentido resulta em **NaN**.

const convertedNumber = String(97)

console.log(convertedNumber, typeof convertedNumber) -> 97 string

const booleanConversion = Boolean(10)

console.log(booleanConversion, typeof booleanConversion) -> true "boolean"

**Em javascript alguns valores são considerados true e outros false.**

Valores falsy:

- false
- 0
- "", '', ``
- null
- undefined
- NaN

Valores truthy:

- Qualquer valor que não é falsy
  
##
console.log(Boolean(0)) -> false

console.log(Boolean('0')) -> true
