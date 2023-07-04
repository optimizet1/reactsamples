import React, { useState } from 'react';

const AuthorsList = ({ books, onSelectAuthor }) => {
  const authors = [...new Set(books.map((book) => book.author))];
  const [selectedAuthor, setSelectedAuthor] = useState('');

  const handleAuthorClick = (author) => {
    setSelectedAuthor(author);
    onSelectAuthor(author);
  };

  return (
    <div>
      <h2>Authors:</h2>
      <ul>
        {authors.map((author) => (
          <li
            key={author}
            onClick={() => handleAuthorClick(author)}
            style={{ cursor: 'pointer', fontWeight: selectedAuthor === author ? 'bold' : 'normal' }}
          >
            {author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorsList;
