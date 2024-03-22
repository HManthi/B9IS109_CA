import React from 'react'

const BookCard = ({book}) => {
    const {name, author, imageUrl} = book;
  return (
    <div className='book-card'>
        <img src={imageUrl} alt={name} className='book-image' />
        <div className="book-details">
            <h3>{name}</h3>
            <p>{author}</p>
        </div>
        <div className="book-actions">
            <button>Edit</button>
            <button>Delete</button>
        </div>
    </div>
  )
}

export default BookCard