import React from 'react'
import personService from '../services/persons'

const Contact = ({
  person,
  setPersons,
  setSuccessMessage,
  setErrorMessage
}) => {
  const deletePerson = (e) => {
    const remove = window.confirm(
      `Do you want to remove ${person.name} from your phonebook?`
    )

    if (remove) {
      personService
        .deleteById(person.id)
        .then((response) => {
          personService.getAll().then((response) => {
            setPersons(response)
            setSuccessMessage(
              `${person.name} successfully removed from the list`
            )
            setTimeout(() => {
              setSuccessMessage(null)
            }, 3000)
          })
        })
        .catch((err) => {
          console.log(err)
          setErrorMessage(
            `The information of ${person.name} has already been removed from the server`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 3000)
        })
    }
  }

  return (
    <div>
      <span>
        {person.name} - {person.number}
      </span>
      <button onClick={deletePerson}>Delete</button>
    </div>
  )
}

export default Contact
