import React, { useState } from 'react';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState("");

  const handleAddBook = () => {
    if (!newBook) return;
    setBooks([...books, { title: newBook, read: false }]);
    setNewBook("");
  };

  const handleDeleteBook = (index) => {
    const newBooks = books.filter((_, i) => i !== index);
    setBooks(newBooks);
  };

  return (
    <div className="App">
      <h1>Personal Library Tracker</h1>
      <div>
        <input
          type="text"
          value={newBook}
          onChange={(e) => setNewBook(e.target.value)}
          placeholder="Add a new book..."
        />
        <button onClick={handleAddBook}>Add Book</button>
      </div>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            {book.title}
            <button onClick={() => handleDeleteBook(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

