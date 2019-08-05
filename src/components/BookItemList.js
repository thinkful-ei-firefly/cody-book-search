import React from 'react'

import BookItem from './BookItem'

class BookItemList extends React.Component {

  render() {
    return (
      <div className='item-list'>
        {(this.props.books !== null) &&
          this.props.books.map(book => 
          <BookItem 
            book={book} 
            key={book.id}          
          />)}
      </div>
    )
  }
}

export default BookItemList