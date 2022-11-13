import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Link } from "react-router-dom";
import "./BookList.css";
import coverimg from "../../images/cover_not_found.jpg";

const Book = (book) => {
  const coverImage = book.book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.book.cover_i}-M.jpg`
    : coverimg;
  const bookId = book.book.key.replace("/works/", "");
  const { addBookToMyList, mylist } = useContext(GlobalContext);

  let storedBook = mylist.find((o) => o.id === book.id);

  const mylistDisabled = storedBook ? true : false;

  return (
    <div className="all-books">
      <div className="img-info">
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
      </div>
      <div className="bttns">
        <div className="btn-add">
          <button>
            <span
              className="btn-text"
              disabled={mylistDisabled}
              onClick={(e) => addBookToMyList(book)}
            >
              Add to your list!
            </span>
          </button>
        </div>
        <div className="btn-add2">
          <button>
            <span className="btn-text2">Add to Read!</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
