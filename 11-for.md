## for loop

~~~
for (let i = 0; i < 5; i++) {
  console.log(`Dentro do loop: ${i}`)
}

console.log('Loop concluído)
~~~

Saída do **console.log()** -> 

Dentro do loop: 0

Dentro do loop: 1

Dentro do loop: 2

Dentro do loop: 3

Dentro do loop: 4

Loop concluído

##

~~~
const names = ['Linus', 'Ada', 'Bill']

for (let i; i < name.length; i++) {
  const HTMLTemplate = `<p>${names[i]}</p>`
  console.log(HTMLTemplate)
}
~~~

Saída do **console.log()** -> 

~~~
<p>Linus</p>

<p>Ada</p>

<p>Bill</p>
~~~