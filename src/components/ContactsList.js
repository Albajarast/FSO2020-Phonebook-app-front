import React from 'react'
import Contact from './Contact'

function ContactsList({
  persons,
  setPersons,
  setSuccessMessage,
  setErrorMessage
}) {
  return (
    <div>
      {persons.map((person) => (
        <Contact
          key={person.name}
          person={person}
          setPersons={setPersons}
          setSuccessMessage={setSuccessMessage}
          setErrorMessage={setErrorMessage}
        />
      ))}
    </div>
  )
}

export default ContactsList
