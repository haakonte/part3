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

/**
 * Getter for REST-api, fetches the entire list
 */
app.get('/api/persons', (request, response) => {
  response.json(persons)
})

/**
 * Getter for specified info.
 * Returns a html document with entries and amount of 
 * people in phonebook
 */
app.get('/info', (request, response) => {
  const amountOfPeople = persons.length
  const date = new Date()
  const date_string = `<p>${date}</p>`
  const entries = `<p>Phonebook has ${amountOfPeople} amount of people</p>` 
  response.send(`${entries} ${date_string}`)
})

/**
 * Get a single person by id
 * Returns that person as a json
 * object
 */
app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

/**
 * Delete method, deletes person by given ID, 
 * or returns 404 if that person is not found
 */
app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)
  response.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})