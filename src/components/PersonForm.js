import axios from 'axios'
import React, { useState } from 'react'
import personService from '../services/persons'

function PersonForm({ persons, setPersons, setSuccessMessage }) {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addNewName = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }

    let foundPerson = false
    let foundPersonIndex = persons.findIndex(
      (person) => person.name === newName
    )
    let foundPersonId
    if (foundPersonIndex !== -1) {
      const fountPersonIndex = persons.findIndex(
        (person) => person.name === newName
      )
      foundPersonId = foundPersonIndex + 1
      foundPerson = true
    }

    if (!foundPerson) {
      personService.create(newPerson).then((response) => {
        setPersons(persons.concat(response))
        setSuccessMessage(`${response.name} successfully added to the list`)
        setNewName('')
        setNewNumber('')
      })
    } else {
      setNewName('')
      setNewNumber('')
      const update = window.confirm(
        `${persons[foundPersonIndex].name} already exists! Do you want to replace the old number with a new one?`
      )
      if (update) {
        personService
          .updateById(foundPersonId, newPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== foundPersonId ? person : returnedPerson
              )
            )
            setSuccessMessage(`${returnedPerson.name} updated`)
            setTimeout(() => {
              setSuccessMessage(null)
            }, 3000)
          })
      } else {
        console.log('Cancelled!')
      }
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <form onSubmit={addNewName}>
        <div>
          <label htmlFor="name">Name:</label>
          <input id="name" value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="number">Number:</label>
          <input id="number" value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default PersonForm
