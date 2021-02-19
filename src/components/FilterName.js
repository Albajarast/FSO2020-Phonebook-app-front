import React from 'react'

const FilterName = ({ newSearch, setNewSearch }) => {
  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }

  return (
    <div>
      <label htmlFor="search">Filter shown with:</label>
      <input id="search" value={newSearch} onChange={handleSearchChange} />
    </div>
  )
}

export default FilterName
