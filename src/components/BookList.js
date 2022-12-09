import {useState} from "react";
import BookShow from './BookShow';


function BookList({books}) {
  //const [books, setBooks] = useState([]);


  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book}/>;
  });


  return <div>{renderedBooks}</div>;
}

export default BookList;
