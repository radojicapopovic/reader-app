import React, { useContext, useState } from "react";
import { Context } from "../../context/GlobalContext";
import Loader from "../Loader/Loader";
import Pagination from "../Pagination/Pagination";
import Book from "./Book";
import "./BookList.css";

const BookList = () => {
  const value = useContext(Context);
  const { book_list, heading } = value;

  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(12);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = book_list?.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 640);
  };

  let result;

  if (book_list === undefined || book_list.length === 0) {
    result = <Loader />;
  } else {
    result = (
      <section className="booklist">
        <div className="container">
          <div className="section-title">
            <h2>{heading}</h2>
          </div>
          <div className="booklist-content grid">
            {currentBooks.map((item) => {
              return <Book key={item.key} book={item} />;
            })}
          </div>
          <Pagination
            booksPerPage={booksPerPage}
            totalBooks={book_list.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </section>
    );
  }
  return <div>{result}</div>;
};

export default BookList;