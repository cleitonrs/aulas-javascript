**HTML**

~~~
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Parents, children e siblings</title>
</head>
<body>
  <h1>Parents, children e siblings</h1>

  <article>
    <h2>Título do post</h2>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

    <div>Escrito por Cleiton Santos</div>
  </article>

  <script src="./app.js"></script>
</body>
</html>
~~~

## Elemento filho

Imagine que nesse HTML queremos selecionar todos os elementos dentro da tag **article** para adicionar uma classe CSS em cada um desses elementos. A melhor maneira é buscar o **article** no DOM, armazenar a referência dele e através dessa referência, usarmos uma propriedade **children** para obter todas as referências dos elementos filhos desse **article**.

**App.js**

~~~
const article = document.querySelector('article')

console.log(article.children)
~~~

O console.log acima exibirá em sua saída um **HTMLCollection** com todos os elementos filhos do **article**. Só que ao contrário de um **array** ou um **NodeList** o **HTMLCollection** não é compatível com o método **forEach**. Então para iterarmos sobre os elementos de um **HTMLCollection**, precisamos convertê-lo em um **array** para podermos usar o método **forEach**.

Para converter um **HTMLCollection** em um **array** a gente vai precisar passar esse **HTMLCollection** como argumento de um método **from** da *função construtora array*.

~~~
console.log(Array.from(article.children))
~~~

A saída do console.log acima não será mais um **HTMLCollection** e sim um **array**. Lembrando que essa invocação não modifica o objeto original.

~~~
Array.from(article.children).forEach(element => {
  element.classList.add('article-element')
})
~~~

Com o código acima todos os elementos filhos do **article** irão conter a classe *article-element*

## Elemento pai

No código abaixo, iremos descobrir quem é o elemento pai do **h2**

~~~
const title = document.querySelector('h2')

console.log(title.parentElement)
~~~

O console.log acima exibirá o **article** como elemento pai. E agora quem é o pai do **article**? Assim como em qualquer objeto, as propriedades são encadeáveis.

~~~
console.log(title.parentElement.parentElement)
~~~

O console.log acima mostrará que o pai do **article** é o **body**

## Elemento irmão

~~~
console.log(title.nextElementSibling)
~~~

O console.log acima mostrará que o próximo irmão do **h2** é o **p**.

~~~
console.log(title.previousElementSibling)
~~~

A saída do console.log acima será **null**. Pois o **h2** não tem irmão anterior.
