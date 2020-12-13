const { response, request } = require('express')
const express = require('express')
const app = express()


app.use(express.json())

let persons = [
  {
    id: 1,
    name: 'Gabe Itch',
    number: "10000000"
  },
  {
    id: 2,
    name: 'Ben Dover',
    number: "34343434"
  },
  {
    id: 3,
    name: 'Mike Hunt',
    number: "50505050"
  }
]

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/info', (request, response) => {
  const amountOfPeople = persons.length
  const date = new Date()
  const date_string = `<p>${date}</p>`
  const entries = `<p>Phonebook has ${amountOfPeople} amount of people</p>` 
  response.send(`${entries} ${date_string}`)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }

})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})