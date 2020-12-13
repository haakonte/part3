const { response } = require('express')
const express = require('express')
const app = express()


app.use(express.json())

let persons = [
  {
    id: 1,
    name: 'Arto Hellas',
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

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})