Toda vêz que uma variável não recebe um valor, o javascript a torna undefined.

let emptiness

console.log(emptiness, emptiness + 3, `o valor é ${emptiness}`) -> undefined NaN "o valor é undefined"

##
Toda vêz que queremos indicar que uma variável não tem valor, utilizamos o **null**

emptiness = null

console.log(emptiness, emptiness + 3, `o valor é ${emptiness}`) -> null 3 "o valor é null" 