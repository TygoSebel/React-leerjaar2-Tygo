import Book from "./Book";
//plaats hier je inport van useState
import { useState } from "react";
import BookCounter from "./BookCounter";

const BookList = () => {
  //maak een useState genaamd books en setBooks
  const [books, setBooks] = useState([
    {
      title: "Harry potter and the sorcerer's stone",
      author: "Joanne Rowling",
      image: "/images/book-1.png",
    },
    {
      title: "Fantasia VI",
      author: "Geronimo Stilton",
      image: "/images/book-2.png",
    },
    {
      title: "The Hunger Games",
      author: "Suzanne Collins",
      image: "/images/book-3.png",
    },
    
  ]);

  return (
    <section className="bookList">
      <BookCounter count={books.length} />

      {books.map((book) => (
        <Book title={book.title} author={book.author} image={book.image} />
      ))}
    </section>
  );
};

export default BookList;
