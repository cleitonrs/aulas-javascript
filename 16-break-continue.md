## break e continue

O **break** irá parar uma iteração de um loop, quando ele atingir uma determinada condição.

A **continue** pula uma iteração em particular, e faz o loop continuar a ser executado.
~~~
const scores = [50, 25, 0, 30, 100, 20, 10]

for (let i = 0; i < scores.length; i++) {
  if (scores[i] === 0) {
    continue
  }

  console.log(`Sua pontuação: ${scores[i]}`)

  if (scores[i] === 100) {
    console.log('Parabéns, você atingiu a pontuação máxima!)

    break
  }
}
~~~

A saída do console.log() sera: 

  Sua pontuação: 50

  Sua pontuação: 25

  Sua pontuação: 30

  Sua pontuação: 100

  Parabéns, você atingiu a pontuação máxima!
