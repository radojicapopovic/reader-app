import React from "react";
import { Link } from "react-router-dom";
import "./BookList.css";
import coverimg from "../../images/cover_not_found.jpg";

const Book = (book) => {
  const coverImage = book.book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.book.cover_i}-M.jpg`
    : coverimg;
  const bookId = book.book.key.replace("/works/", "");

  return (
    <Link
      to={`/works/${bookId}`}
      className="book-item flex flex-column flex-sb"
    >
      <div className="book-item-img">
        <img src={coverImage} alt="cover" />
      </div>
      <div className="book-item-info text-center">
        <div className="book-item-info-item title fw-7 fs-18">
          <span>{book.book.title}</span>
        </div>

        <div className="book-item-info-item author fs-15">
          <span className="text-capitalize fw-7">Author: </span>
          <span>{book.book.author_name}</span>
        </div>

        <div className="book-item-info-item edition-count fs-15">
          <span className="text-capitalize fw-7">Total Editions: </span>
          <span>{book.book.edition_count}</span>
        </div>

        <div className="book-item-info-item publish-year fs-15">
          <span className="text-capitalize fw-7">First Publish Year: </span>
          <span>{book.book.first_publish_year}</span>
        </div>
      </div>
    </Link>
  );
};

export default Book;