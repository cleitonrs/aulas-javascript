**html**
~~~
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Query selector & query selector all</title>
</head>
<body>
  <h1>Obtendo e setando atributos</h1>

  <a href="https://github.com/cleitonrs">Cleiton Santos</a>

  <p class="error">Mensagem</p>

  <script src="./app.js"></script>
</body>
</html>
~~~

## getAttribute

O método **getAttribute** irá obter o valor do atributo de uma tag HTML

**app.js**

~~~
const link = document.querySelector('a')

console.log(link.getAttribute('href'))
~~~

A saída do código acima será: https://github.com/cleitonrs

## setAttribute

O método **setAttribute** irá setar um novo valor para o atributo escolhido, da tag HTML.
Ele possui dois argumento, o primeiro é o nome do atributo que a gente quer modificar, e o segundo argumento é o valor que a gente quer inserir no atributo.

~~~
link.setAttribute('href', 'https://cleitonrs.dev')

link.innerText = 'Website do Cleiton Santos'

const paragraph = document.querySelector('p')

console.log(paragraph.getAttribute('class')) -> error

paragraph.setAttribute('class', 'success')
~~~

Na última linha do código acima, a class="error" da tag **p** será substituída pela class="success" no documento HTML

O **setAttribute** além de modificar, também pode inserir um atributo na tag

~~~
paragraph.setAttribute('style', 'color: green;')
~~~

O código acima criará o atributo style, passando a color: green para o parágrafo no documento HTML

