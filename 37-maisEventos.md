**HTML**
~~~
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>Document</title>
</head>
<body>
  <p class="copy-me">Lorem ipsum dolor, sit amet consectetur</p>

  <div class="box">Mova o mouse nessa box</div>

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

  <script src="./app.js"></script>
</body>
</html>
~~~

**CSS**
~~~

.box {
  width: 200px;
  height: 200px;
  margin: 10px 0;
  background: #eee;
  text-align: center;
  padding: 20px;
}
~~~

## Copy event

Ele acontece quando selecionamos algum texto e clicamos com botão direito do mouse em *copy* 

**App.js**
~~~

const paragraph = document.querySelector('.copy-me')

paragraph.addEventListener('copy', () => {
  console.log('Texto copiado')
})
~~~

No código acima se a gente selecionar o texto do parágrafo e copiar com o botão direito do mouse ou com o comando Ctrl+c, a string 'Texto copiado' será exibida no console da página.

## Mouse move event

~~~
const div = document.querySelector('.box')

div.addEventListener('mousemove', event => {
  console.log(event.offsetX, event.offsetY)
})
~~~

No código acima, ao movermos o cursor do mouse na **div**, será exibido no console da página a posição no eixo x e no eixo y do cursor.

##
~~~
const div = document.querySelector('.box')

div.addEventListener('mousemove', event => {
  div.textContent = `X ${evnet.offsetX} | Y ${event.offsetY}`
})
~~~

Agora com o código acima, ao movermos o cursor do mouse na **div**, será exibido na própria **div** um conteúdo de texto com a posição do cursor no eixo x e no eixo y.

## Wheel event

~~~
document.addEventListener('wheel', event => {
  console.log(event.pageX, event.pageY)
})
~~~

No código acima, se a gente fizer um scroll na página, será exibido no console da página a posição do cursor do mouse no eixo x e no eixo y da página.
