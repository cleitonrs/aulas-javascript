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
  <h1 style="color: blue;">Modificando estilos CSS (inline)</h1>

  <script src="./app.js"></script>
</body>
</html>
~~~

Quando usamos o método **setAttribute** para adicionar estilo ao elemento, ele pode sobrescrever o estilo que o elemento já possui.

A melhor maneira de evitar isso é usando a propriedade **style** como no exemplo abaixo.
Com essa propriedade podemos obter, adicionar ou remover estilos de um elemento.

**app.js**
~~~
const title = document.querySelector('h1')

console.log(title.style.color) -> blue

title.style.margin = '50px'
~~~

No última linha do código acima, a propriedade margin será adicionada na tag **h1** com o valor de 50px

~~~
title.style.color = 'pink'
~~~

No código acima a cor do **h1** será substituída de blue para pink.

##
Quando escrevemos propriedades css no javascript, usamos a notação de camelCase para propriedades com duas ou mais palavras.

~~~
title.style.fontSize = '50px'
~~~

##
Quando queremos remover um estilo, passamos como valor da propriedade uma string vazia **('')**

~~~
title.style.margin = ''
~~~
