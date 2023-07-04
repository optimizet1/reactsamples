import React from 'react';

const BooksList = ({ books, selectedAuthor }) => {
  return (
    <div>
      <h2>Books:</h2>
      <ul>
        {books.map((book, index) => (
          <li
            key={index}
            style={{ color: selectedAuthor === book.author ? 'red' : 'black' }}
          >
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
