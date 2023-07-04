Sure! Here's an example of how you can use the provided books JSON in a React app to create the desired functionality:

First, create a React component called `AuthorsList` that renders the distinct list of authors on the left side. When an author is clicked, it will update the selected author state.

```jsx
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
```

Next, create another React component called `BooksList` that renders the book titles on the right side. When an author is selected, it will display the books written by that author with a red font color.

```jsx
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
```

Finally, create the main React component called `App` that integrates both `AuthorsList` and `BooksList`.

```jsx
import React, { useState } from 'react';
import AuthorsList from './AuthorsList';
import BooksList from './BooksList';
import booksData from './books.json';

const App = () => {
  const [selectedAuthor, setSelectedAuthor] = useState('');

  const handleSelectAuthor = (author) => {
    setSelectedAuthor(author);
  };

  return (
    <div>
      <AuthorsList books={booksData.books} onSelectAuthor={handleSelectAuthor} />
      <BooksList books={booksData.books} selectedAuthor={selectedAuthor} />
    </div>
  );
};

export default App;
```

Make sure to have the `books.json` file in the same directory as your components and import it accordingly.

With these components, when a user clicks on an author from the `AuthorsList` component, the selected author state will be updated. The `BooksList` component will render the book titles, and if the book is written by the selected author, its font color will be changed to red. Clicking on a book itself does nothing based on the requirements.

Remember to install the necessary dependencies, set up the required React components, and render the `App` component to see the desired functionality in action.


Certainly! Here's an enhanced version of the JSON structure with additional books that share the same authors:

```json
{
  "books": [
    {
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald"
    },
    {
      "title": "This Side of Paradise",
      "author": "F. Scott Fitzgerald"
    },
    {
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee"
    },
    {
      "title": "Go Set a Watchman",
      "author": "Harper Lee"
    },
    {
      "title": "Pride and Prejudice",
      "author": "Jane Austen"
    },
    {
      "title": "Sense and Sensibility",
      "author": "Jane Austen"
    },
    {
      "title": "1984",
      "author": "George Orwell"
    },
    {
      "title": "Animal Farm",
      "author": "George Orwell"
    },
    {
      "title": "The Catcher in the Rye",
      "author": "J.D. Salinger"
    },
    {
      "title": "Franny and Zooey",
      "author": "J.D. Salinger"
    }
  ]
}
```

In this enhanced version, additional books by the same authors have been included. For example, F. Scott Fitzgerald has two books, "The Great Gatsby" and "This Side of Paradise". Similarly, Harper Lee has two books, "To Kill a Mockingbird" and "Go Set a Watchman". Jane Austen has two books, "Pride and Prejudice" and "Sense and Sensibility". George Orwell has two books, "1984" and "Animal Farm". Lastly, J.D. Salinger has two books, "The Catcher in the Rye" and "Franny and Zooey".