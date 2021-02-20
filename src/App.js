import React, { useEffect, useState } from 'react'
import FilterName from './components/FilterName'
import PersonForm from './components/PersonForm'
import ContactsList from './components/ContactsList'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newSearch, setNewSearch] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const fetchData = () => {
    personService.getAll().then((response) => {
      setPersons(response)
    })
  }

  useEffect(fetchData, [])

  // const filteredPersons = persons.filter((person) =>
  //   person.name.toLowerCase().includes(newSearch.toLowerCase())
  // )

  // const personsToShow = newSearch === undefined ? persons : filteredPersons

  const personsToShow = persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={successMessage} type={'success'} />
      <Notification message={errorMessage} type={'error'} />
      <FilterName newSearch={newSearch} setNewSearch={setNewSearch} />
      <h3>Add a new contact</h3>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        setSuccessMessage={setSuccessMessage}
        setErrorMessage={setErrorMessage}
      />
      <h2>Numbers</h2>
      <ContactsList
        persons={personsToShow}
        setPersons={setPersons}
        setSuccessMessage={setSuccessMessage}
        setErrorMessage={setErrorMessage}
      />
    </div>
  )
}

export default App
