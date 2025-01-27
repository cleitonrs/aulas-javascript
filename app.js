// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(users => console.log(users))
//   .catch(error => console.log(error))

// const getUsers = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users')
//   return await response.json()
// }

// const logUsers = async () => {
//   const users = await getUsers()
//   console.log(users)
// }

// console.log(1)
// console.log(2)

// logUsers()

// console.log(3)
// console.log(4)

const getPokemons = async () => {
  const bulbasaur =  fetch('https://pokeapi.co/api/v2/pokemon/1')
  const charmander =  fetch('https://pokeapi.co/api/v2/pokemon/4')
  const squirtle =  fetch('https://pokeapi.co/api/v2/pokemon/7')
  
  const results = await Promise.all([bulbasaur, charmander, squirtle])
  results.forEach(async response => console.log(await response.json()))
}

getPokemons()
