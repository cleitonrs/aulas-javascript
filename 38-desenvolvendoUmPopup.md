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
  <button>Clique aqui</button>

  <div class="popup-wrapper">
    <div class="popup">
      <div class="popup-close">x</div>

      <div class="popup-content">
        <h2>Popup deselegante</h2>
        <p>O autor do popup foi o programador Cleiton Santos</p>
        <a class="popup-link" href="#">Saiba mais</a>
      </div>
    </div>
  </div>

  <script src="./app.js"></script>  
</body>
</html>
~~~

**CSS**
~~~

* {
  box-sizing: border-box;
}

button {
  display: block;
  margin: 20px auto;
  background: crimson;
  color: white;
  border: 0;
  cursor: pointer;
  padding: 6px 10px;
}

.popup-wrapper {
  display: none;
  background: rgba(0, 0, 0, .5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.popup {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  width: 100%;
  max-width: 300px;
  margin: 10% auto;
  padding: 20px;
  background: white;
  position: relative;
}

.popup a {
  color: white;
  cursor: pointer;
  padding: 6px 10px;
  text-decoration: none;
  background: crimson;
}

.popup-close {
  position: absolute;
  top: 5px;
  right: 10px;
  cursor: pointer;
}
~~~

## O método some

O **some** é um método de array, que serve para iterar sobre um array e verificar se pelo menos um item desse array atende a condição que será especificada dentro desse método. Se pelo menos um item desse array atender a condição, o **some** irá retornar **true**, caso nenhum item atenda a condição, o **some** irá retornar **false**.


**App.js**
~~~

const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')

button.addEventListener('click', () => {
  popup.style.display = 'block'
})

popup.addEventListener('click', event => {
  const classNameOfClickedElement = event.target.classList[0]
  const classNames = ['popup-close', 'popup-wrapper', 'popup-link']
  const shouldClosePopup = classNames.some(className => 
    className === classNameOfClickedElement)

  if (shouldClosePopup) {
    popup.style.display = 'none'
  }
})
~~~
