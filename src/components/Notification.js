import React from 'react'

const Notification = ({ message, type }) => {
  const successStyles = {
    color: 'green',
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px'
  }

  const errorStyles = {
    color: 'red',
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px'
  }

  if (message === null) {
    return null
  }

  if (type === 'success') {
    return <div style={successStyles}>{message}</div>
  } else if (type === 'error') {
    return <div style={errorStyles}>{message}</div>
  } else {
    return null
  }
}

export default Notification
