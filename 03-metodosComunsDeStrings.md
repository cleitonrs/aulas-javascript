## Métodos comuns de strings

const email = 'laracroft@gamail.com'

O método **lastIndexOf()** vai obter o index da última ocorrência do caractere que for passado por argumento  

const lastIndexOfA = email.lastIndexOf('a') 

console.log(lastIndexOfA) -> 3
##
O método **slice()** vai fatiar, pegar um pedaço de uma string. Ele recebe dois argumentos, onde o primeiro argumento indica o index do caractere a partir do qual essa parte da string deve ser pega e o segundo argumento é o número que representa a partir de onde a string deve ser cortada.

const emailSlice = email.slice(0, 9)

console.log(emailSlice) -> laracroft

##
O método **replace()** irá substituir o caractere de uma string por outro. Passamos dois argumentos, sendo o primeiro, a string que queremos substituir, e o segundo a string que será substituída.

const emailReplace = email.replace('l', 'y')

console.log(emailReplace) -> yaracroft@gmail.com

const emailReplace2 = email.replace('laracroft', 'maishiranui')

console.log(emailReplace2) -> maishiranui@gmail.com