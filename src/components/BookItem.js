import React from 'react'

class BookItem extends React.Component{

  render(){
    return(
      <section>
        <header>
          <h2>{this.props.book.title}</h2>
          {this.props.book.imageLinks!==undefined? 
          <img src={this.props.book.imageLinks.thumbnail} alt='Book Cover'></img>
          :<img alt='Book Cover'>No Image Available</img>}
          <h3>Authors:</h3>
          {this.props.book.authors!==undefined?
            this.props.book.authors.map((author, index) => <h3 key={index}>{author}</h3>)
            :
            'No Available Data'
            }
          <h4>Avg Rating: {this.props.book.averageRating}</h4>
        </header>
        <article>{this.props.book.description}</article>
      </section>
    )
  }
}

export default BookItem