import React from 'react'

function SearchBar(props){

  const submitForm = (e) =>{
    e.preventDefault()
    // console.log(e.target.search.value)
    props.updateSearchTerm(e.target.search.value)
  }


  return(
    <form onSubmit={e => submitForm(e)}>
      <label htmlFor='search'>Search:</label>
      <input type='text' id='search' name='search' required />
      <input type='submit' value='Submit' />
    </form>
  )
}

export default SearchBar;