import React from "react";
import {useState} from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const deleteBookById = (idToRemove) => {
    console.log("deleting");
      const updatedBooks = books.filter((book) => {
        return book.id != idToRemove;
      });
      setBooks(updatedBooks);
  };

  //to do create back up, reverse button, save to the local storage, save button, load from local storage as db, 
  const createBook = (title) => {
    const updatedBooks = [
      ...books, {id: Math.round(Math.random() * 9999),
      title,
      },
    ];
    setBooks(updatedBooks);
  }

  const changeTitleById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
  
    setBooks(updatedBooks);
  };


  return <div>
    <BookList books={books}  onDelete={deleteBookById} onEdit={changeTitleById}/>
    <BookCreate onCreate={createBook}/>
  </div>;
}

export default App;
