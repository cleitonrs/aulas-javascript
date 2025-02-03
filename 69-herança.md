## Herança

Herança é um conceito da orientação a objeto. Nesse caso a herança entre classes, consiste que uma subclasse herde propriedades e métodos de uma outra classe.

```
classe Mammal {
  constructor (species, name, age) {
    this.species = species
    this.name = name
    this.age = age
    this.mammaryGland = true
  }

  incrementAge () {
    this.age++
  }
}

const zeca = new Mammal('zebra', 'Zeca', 6)
const pompeu = new Mammal('gnu', 'Pompeu', 6)
const angus = new Mammal('cavalo', 'Angus', 3)

```
Agora vamos criar uma nova classe Lion quer herde todas as propriedades e métodos que a classe Mammal possui e que também possua propriedades e métodos que são únicos dela.

Para a classe Lion herder todas a propriedades e métodos da classe Mammal usamos a palavra chave *extends* seguido do nome da classe que queremos herdar as propriedades e métodos, que no nosso caso será Mammal.

Quando uma classe não possui um *constructor* declarado dentro dela, ela utiliza o *constructor* da classe que ela está herdando

```
class Lion extends Mammal {
  eatZebras (animals) {
    return animals.filter(animal => animal.species !== 'zebra')
  }
}

const mufasa = new Lion('leão', 'Mufasa', 7)

const animals = [zeca, pompeu, angus]

console.log(mufasa.eatZebras(animals))

```

Na classe Lion acima, foi declarado um método único pra ela. Para criar propriedades únicas para a classe Lion, usamos o **super** que um *constructor* dentro de outro *constructor* contendo os argumentos da classe herdada. 

O **super** é usado para chamar o *constructor* da classe que está sendo herdada, quando precisas usar um *constructor* pra classe filha.

```
class Lion extends Mammal {
  constructor (species, name, age, manEater) {
    super(species, name, age)
    this.manEater = manEater
  }
}

```