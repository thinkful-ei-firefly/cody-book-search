import React from 'react';

import Header from './Header'
import SearchBar from './SearchBar'
import FilterBar from './FilterBar'
import BookItemList from './BookItemList'

class BookSearchApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      printType:'',
      bookType: '',
      searchTerm: null,
      books: null
    }
  }

  updateSearchTerm = (newSearchTerm) => {
    this.setState({ searchTerm: newSearchTerm })
    this.getBooks(newSearchTerm); // how to have it fetch from state value?
  }

  updatePrintFilter = (filter) => {
    this.setState({printType: filter})
    this.getBooks(this.state.searchTerm, filter)
  }

  updateBookFilter = (filter) => {
    this.setState({bookType: filter})
    this.getBooks(this.state.searchTerm, this.state.printType, filter)
  }

  getBooks = (searchTerm=this.state.searchTerm, printFilter=this.state.printType, bookFilter=this.state.bookType)  => {
    // use new url

    let url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
    if(this.state.printType.length>0){
      url += `&filter=${printFilter}`
    }
    if(this.state.bookType.length>0){
      url += `&printType=${bookFilter}`
    }
    url += '&key=AIzaSyAq5wX_E6cHII7doUvmG_4K6206Jk_L4To'

    console.log(url)
      fetch(url)
        .then(resp => resp.json())
        .then(data => {
          const books = (data.items).map(book => {
            const bookObj = {
              ...book.volumeInfo,
              id: book['id']
            }
            return bookObj
          })
          console.log('books: ', books)
          this.setState({
            books: books
          })
        })
        .catch(error => console.error(error));
  }

  // componentDidMount() {
  //   this.getBooks()
  // }

  // componentDidUpdate(prevProps, prevState){
  //   console.log(prevState)
  //   if(this.state.searchTerm !== prevState.searchTerm)
  //   this.getBooks()
  // }


  render() {
    console.log()
    return (
      <div className='book-search-app'>
        <Header />
        <SearchBar
          updateSearchTerm={this.updateSearchTerm}
          getBooks={this.getBooks}
        />
        <FilterBar 
          updatePrintFilter={this.updatePrintFilter}
          updateBookFilter={this.updateBookFilter}
        />
        <BookItemList books={this.state.books} />
      </div>
    )
  }

}

export default BookSearchApp