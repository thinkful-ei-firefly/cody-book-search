import React from 'react'

function FilterBar(props){

  const handlePrintFilter = (e) =>{
    props.updatePrintFilter(e.target.value)
  }

  const handleBookFilter = (e) =>{
    props.updateBookFilter(e.target.value)
  }

  return (
    <form>
      <label htmlFor='print-type'>Print Type:</label>
      <select onChange={handlePrintFilter}>
        <option value=''>All</option>
        <option value='free-ebooks'>Free</option>
        <option value='paid-ebooks'>Paid</option>
      </select>

      <label htmlFor='book-type'>Book Type:</label>
      <select onChange={handleBookFilter}>
        <option value=''>No Filter</option>
        <option value='books'>Books</option>
        <option value='magazines'>Magazines</option>
      </select>
    </form>
  )
}

export default FilterBar